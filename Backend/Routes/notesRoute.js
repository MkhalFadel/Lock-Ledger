const express = require("express");
const route = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { findNotesByUser, createNote, updateNote, deleteNote } = require("../Controllers/notesController");

const {updateNotesFields} = require("../utils/utils");
// protect all notes routes
route.use(authMiddleware);

//find unique note
// route.get("/:id", async (req, res) => {
//    try {
//       const { id } = req.params;
//       const data = await findNote(id);
//       res.status(200).json(data);
//    } catch (error) {
//       res.status(500).json({ error: error.message });
//    }
// });

route.get("/user/", async (req, res) => {
   try {
      const data = await findNotesByUser(req);
      res.status(200).json(data);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
});

route.post("/", async (req, res) => {
   try {
      const data = await createNote(req.body);
      res.status(201).json(data);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
});

route.put("/:id", async (req, res) => {
   try {
      const { id } = req.params;
      const fields = updateNotesFields(req.body);
      const data = await updateNote(id, req, fields); 
      res.status(200).json(data);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
});

route.delete("/:id", async (req, res) => {
   try {
      const { id } = req.params;
      await deleteNote(id, req);
      res.status(200).json({ message: "Note deleted successfully" });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
});

module.exports = route;
