const express = require("express");
const route = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { findNote, findNotesByUser, createNote, updateNote, deleteNote } = require("../Controllers/notesController");

// protect all notes routes
route.use(authMiddleware);
const {updateNotesFields} = require("../utils/utils");

route.get("/:id", async (req, res) => {
   try {
      const { id } = req.params;
      const data = await findNote(id);
      res.status(200).json({ data: data });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
});

route.get("/user/:userId", async (req, res) => {
   try {
      const { userId } = req.params;
      const data = await findNotesByUser(userId);
      res.status(200).json({ data: data });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
});

route.post("/", async (req, res) => {
   try {
      const data = await createNote(req.body);
      res.status(201).json({ data: data });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
});

route.put("/:id", async (req, res) => {
   try {
      const { id } = req.params;
      const fields = updateNotesFields(req.body) 
      const data = await updateNote(id, fields);
      res.status(200).json({ data: data });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
});

route.delete("/:id", async (req, res) => {
   try {
      const { id } = req.params;
      await deleteNote(id);
      res.status(200).json({ message: "Note deleted successfully" });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
});

module.exports = route;
