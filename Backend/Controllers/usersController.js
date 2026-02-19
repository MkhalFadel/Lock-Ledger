const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { hashPassword, verifyPassword, generateToken } = require("../utils/auth");

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

async function login({ identifier, password }) {
   try {
      const user = await prisma.user.findFirst({
         where: { OR: [{ email: identifier }, { username: identifier }] }
      });
      if (!user) throw new Error("Invalid credentials");
      const ok = await verifyPassword(password, user.password);
      if (!ok) throw new Error("Invalid credentials");
      const token = generateToken({ id: user.id, username: user.username });
      const { password: pw, ...rest } = user;
      return { token, user: rest };
   } catch (error) {
      console.log("Login error:", error);
      throw error;
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

module.exports = { findUser, updateUser, createUser, deleteUser, login };