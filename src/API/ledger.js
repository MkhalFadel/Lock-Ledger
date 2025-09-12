const API_BASE = 'https://68c30a65f9928dbf33f08cf1.mockapi.io/LockLedger';

export async function addTransaction(userId, date, title, type, amount)
{
   try{
      const res = await fetch(`${API_BASE}/ledger`,{
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({userId, date, title, type, amount})
      })

      return await res.json();
   }
   catch{
      throw new Error("Failed to Create TransAction");
   }
}

export async function fetchLedger(userId)
{
   try{
      const res = await fetch(`${API_BASE}/ledger?userId=${userId}`)
      if (res.ok) return res.json();
   }
   catch{
      throw new Error("Failed to Fetch Data");
   }

}

export async function editLedger(id, date, title, type, amount)
{
   try{
      const res = await fetch(`${API_BASE}/ledger/${id}`, {
         method: "PUT",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({date: date, title: title, type: type, amount: amount}),
      })
      
      return res.json();
   }
   catch{
      throw new Error("Failed to update Ledger");
   }
}

export async function deleteLedger(id)
{
   try{
      await fetch(`${API_BASE}/ledger/${id}`, {method: "DELETE"})
      return true;
   }
   catch{
      throw new Error("Failed to delete data");
   }
}