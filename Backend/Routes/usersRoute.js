const express = require("express");
const route = express.Router();
const {findUser, createUser, updateUser, deleteUser, loginController} = require("../Controllers/usersController");
const { generateToken } = require('../utils/auth');
const {updateUsersFields} = require("../utils/utils");
const refreshTokenController = require("../middleware/refreshToken");
const googleLoginController = require("../Controllers/googleLoginControllerl")

const cookieOptions = (() => {
   if (process.env.NODE_ENV === 'production') {
      return {
         httpOnly: true,
         secure: true,
         sameSite: 'none',
         maxAge: 3600000
      };
   }
   // development-friendly options (cookies over http/localhost)
   return {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 3600000
   };
})();

route.get("/:id", async (req, res) => {
   try {
      const {id} = req.params;
      const data = await findUser(id);
      res.status(200).json({data: data});
   } catch (error) {
      res.status(500).json({error: error.message});
   }
})

route.post("/", async (req, res) => {
   try {
      const data = await createUser(req.body);
      // Issue auth token immediately after signup
      const token = generateToken({ id: data.id, username: data.username });
      res.cookie('authToken', token, cookieOptions);
      res.status(201).json({ token, user: data });
   } catch (error) {
      res.status(500).json({error: error.message});
   }
})

route.post("/auth/google", googleLoginController);

route.post("/login", loginController)

route.post('/refresh', refreshTokenController);

route.put("/:id", async (req, res) => {
   try {
      const {id} = req.params;
      const fields = updateUsersFields(req.body)
      const data = await updateUser(Number(id), fields);
      res.status(200).json(data);
   } catch (error) {
      res.status(500).json({error: error.message});
   }
})

route.delete("/:id", async (req, res) => {
   try {
      const {id} = req.params;
      await deleteUser(parseInt(id));
      res.status(200).json({message: "User deleted successfully"});
   } catch (error) {
      res.status(500).json({error: error.message});
   }
})

module.exports = route;