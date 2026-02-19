const express = require("express");
const route = express.Router();
const {findUser, createUser, updateUser, deleteUser, login} = require("../Controllers/usersController");
const updateFields = require("../utils/utils");

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
      res.status(201).json({data: data});
   } catch (error) {
      res.status(500).json({error: error.message});
   }
})

route.post("/login", async (req, res) => {
   try {
      const { identifier, password } = req.body; // identifier = email or username
      const data = await login({ identifier, password });
      res.status(200).json(data);
   } catch (error) {
      res.status(401).json({ error: error.message });
   }
})

route.put("/:id", async (req, res) => {
   try {
      const {id} = req.params;
      const fields = updateFields(req.body)
      const data = await updateUser(parseInt(id), fields);
      res.status(200).json({data: data});
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