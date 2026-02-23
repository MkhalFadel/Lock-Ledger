const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// async function findLedger(id) {
//    try {
//       const ledgerEntry = await prisma.ledger.findUnique({
//          where: { id: parseInt(id) }
//       });
//       return ledgerEntry;
//    } catch (error) {
//       console.error("Error finding ledger entry:", error);
//       throw error;
//    }
// }

async function findLedgerByUser(req) {
   try {
      const ledgerEntries = await prisma.ledger.findMany({
         where: { user_id: req.user.id }
      });
      return ledgerEntries;
   } catch (error) {
      console.error("Error finding ledger entries by user:", error);
      throw error;
   }
}

async function createLedger(data) {
   try {
      const ledgerEntry = await prisma.ledger.create({
         data: {
            user_id: data.user_id,
            title: data.title,
            date: new Date(data.date),
            type: data.type,
            amount: data.amount
         }
      });
      return ledgerEntry;
   } catch (error) {
      console.log("Error creating ledger entry:", error);
      throw error;
   }
}

async function updateLedger(id, req, data) {
   try {
      const updatedData = { ...data };
      if (data.date) {
         updatedData.date = new Date(data.date);
      }
      const ledgerEntry = await prisma.ledger.update({
         where: { id: parseInt(id), user_id: req.user.id },
         data: updatedData
      });
      return ledgerEntry;
   } catch (error) {
      console.log("Error updating ledger entry:", error);
      throw error;
   }
}

async function deleteLedger(id, req) {
   try {
      await prisma.ledger.delete({
         where: { id: parseInt(id), user_id: req.user.id }
      });
   } catch (error) {
      console.log("Error deleting ledger entry:", error);
      throw error;
   }
}

module.exports = { findLedgerByUser, createLedger, updateLedger, deleteLedger };
