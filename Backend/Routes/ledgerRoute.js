const express = require("express");
const route = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { findLedger, findLedgerByUser, createLedger, updateLedger, deleteLedger } = require("../Controllers/LedgerController");

// protect all ledger routes
route.use(authMiddleware);
const {updateLedgerFields} = require("../utils/utils");

// route.get("/:id", async (req, res) => {
//    try {
//       const { id } = req.params;
//       const data = await findLedger(id);
//       res.status(200).json(data);
//    } catch (error) {
//       res.status(500).json({ error: error.message });
//    }
// });

route.get("/user/", async (req, res) => {
   try {
      const data = await findLedgerByUser(req);
      res.status(200).json(data);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
});

route.post("/", async (req, res) => {
   try {
      const data = await createLedger(req.body);
      res.status(201).json(data);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
});

route.put("/:id", async (req, res) => {
   try {
      const { id } = req.params;
      const fields = updateLedgerFields(req.body)
      const data = await updateLedger(id, req, fields);
      res.status(200).json(data);
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
});

route.delete("/:id", async (req, res) => {
   try {
      const { id } = req.params;
      await deleteLedger(id);
      res.status(200).json({ message: "Ledger entry deleted successfully" });
   } catch (error) {
      res.status(500).json({ error: error.message });
   }
});

module.exports = route;
