const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { hashPassword, verifyPassword, generateToken, generateRefreshToken } = require("../utils/auth");

async function findUser(id) {
   try {
      const user = await prisma.user.findUnique({
         where: { id: parseInt(id) }
      });
      return user;
   } catch (error) {
      console.error("Error finding user:", error);
      throw error;
   }
}

async function createUser(data) {
   try {
      const hashed = await hashPassword(data.password);
      const user = await prisma.user.create({
         data: {
            username: data.username,
            email: data.email,
            password: hashed,
            image_url: data.image_url || "",
            pin: data.pin
         }
      });
      const { password, ...rest } = user;
      return rest;
   } catch (error) {
      console.log("Error creating user:", error);
      throw error;
   }
}

async function loginController(req, res) {
   try {
      const { identifier, password } = req.body;

      const user = await prisma.user.findFirst({
         where: {
            OR: [
               { email: identifier },
               { username: identifier }
            ]
         }
      });

      if (!user) {
         return res.status(401).json({ error: "Invalid credentials" });
      }

      const ok = await verifyPassword(password, user.password);
      if (!ok) {
         return res.status(401).json({ error: "Invalid credentials" });
      }

      const payload = { id: user.id, username: user.username };

      const accessToken = generateToken(payload);
      const refreshToken = generateRefreshToken(payload);

      const cookieOptions = {
         httpOnly: true,
         secure: process.env.NODE_ENV === "production",
         sameSite: "lax",
      };

      res.cookie("authToken", accessToken, {
         ...cookieOptions,
         maxAge: 60 * 60 * 1000
      });

      res.cookie("refreshToken", refreshToken, {
         ...cookieOptions,
         maxAge: 7 * 24 * 60 * 60 * 1000
      });

      const { password: pw, ...safeUser } = user;

      return res.status(200).json({
         message: "Login successful",
         user: safeUser
      });

   } catch (error) {
      console.log("Login error:", error);
      return res.status(500).json({ error: "Server error" });
   }
}

async function updateUser(id, data) {
   try {
      const user = await prisma.user.update({
         where: {
            id: id
         },
         data: data
      })
      const { password, ...rest } = user;
      return rest;
   } catch (error) {
      console.log("Error updating user:", error)
      throw error;
   }
}

async function deleteUser(id) {
   try {
      await prisma.user.delete({
         where: {
            id: id
         }
      })
   } catch (error) {
      console.log("Error deleting user:", error);
      throw error;
   }
}

module.exports = { findUser, updateUser, createUser, deleteUser, loginController };