const { OAuth2Client } = require("google-auth-library");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { generateToken, generateRefreshToken } = require("../utils/auth");
const jwt = require("jsonwebtoken")
const crypto = require("crypto")

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

async function googleLoginController(req, res) {
   const { credential } = req.body;
   const decoded = jwt.decode(credential, { complete: true });
   console.log(decoded);
   

   if (!credential) {
      return res.status(400).json({ error: "No token provided" });
   }

   try {
      const ticket = await client.verifyIdToken({
         idToken: credential,
         audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();
      console.log(payload)

      const email = payload.email;

      let user = await prisma.user.findUnique({
         where: { email }
      });

      if (!user) {
         user = await prisma.user.create({
            data: {
               email: payload.email,
               username: payload.name,
               image_url: payload.picture,
            }
         });
      }

      const accessToken = generateToken({
         id: user.id,
         username: user.username
      });

      console.log("ACCESSTOKEN: ", accessToken)

      const refreshToken = generateRefreshToken({
         id: user.id,
         username: user.username
      });

      res.cookie("authToken", accessToken, {
         httpOnly: true,
         secure: process.env.NODE_ENV === "production",
         sameSite: "lax",
         maxAge: 60 * 60 * 1000
      });

      res.cookie("refreshToken", refreshToken, {
         httpOnly: true,
         secure: process.env.NODE_ENV === "production",
         sameSite: "lax",
         maxAge: 7 * 24 * 60 * 60 * 1000
      });

      console.log(user)
      res.status(200).json(user);

   } catch (err) {
      console.error(err);
      res.status(401).json({ error: "Invalid Google token" });
   }
}

module.exports = googleLoginController;