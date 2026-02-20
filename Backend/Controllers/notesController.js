const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function findNote(id) {
   try {
      const note = await prisma.notes.findUnique({
         where: { id: parseInt(id) }
      });
      return note;
   } catch (error) {
      console.error("Error finding note:", error);
      throw error;
   }
}

async function findNotesByUser(userId) {
   try {
      const notes = await prisma.notes.findMany({
         where: { user_id: parseInt(userId) }
      });
      return notes;
   } catch (error) {
      console.error("Error finding notes by user:", error);
      throw error;
   }
}

async function createNote(data) {
   try {
      const note = await prisma.notes.create({
         data: {
            user_id: data.user_id,
            title: data.title,
            content: "This is a new Note"
         }
      });
      return note;
   } catch (error) {
      console.log("Error creating note:", error);
      throw error;
   }
}

async function updateNote(id, data) {
   try {
      const note = await prisma.notes.update({
         where: { id: parseInt(id) },
         data: data
      });
      return note;
   } catch (error) {
      console.log("Error updating note:", error);
      throw error;
   }
}

async function deleteNote(id) {
   try {
      await prisma.notes.delete({
         where: { id: parseInt(id) }
      });
   } catch (error) {
      console.log("Error deleting note:", error);
      throw error;
   }
}

module.exports = { findNote, findNotesByUser, createNote, updateNote, deleteNote };
