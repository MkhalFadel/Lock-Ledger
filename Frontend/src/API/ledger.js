import { apiFetch } from "../utils/utility";

const API_BASE = 'http://localhost:5000/api/ledger';

export async function addTransaction(user_id, date, title, type, amount)
{
   try{
      const res = await apiFetch(`${API_BASE}/`,{
         method: "POST",
         credentials: 'include',
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({user_id, date, title, type, amount})
      })

      return await res.json();
   }
   catch{
      throw new Error("Failed to Create TransAction");
   }
}

export async function fetchLedger(user_id)
{
   try{
      const res = await apiFetch(`${API_BASE}/user/`, {
         credentials: 'include'
      })
      if (res.ok) return await res.json();
   }
   catch{
      throw new Error("Failed to Fetch Data");
   }

}

export async function editLedger(id, date, title, type, amount)
{
   try{
      const res = await apiFetch(`${API_BASE}/${id}`, {
         method: "PUT",
         credentials: 'include',
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
      await apiFetch(`${API_BASE}/${id}`, {
         method: "DELETE",
         credentials: 'include'
      })
      return true;
   }
   catch{
      throw new Error("Failed to delete data");
   }
}