const API_BASE = "https://68befe509c70953d96ee6f2f.mockapi.io/lockLedger";

export async function fetchNotes(userId)
{
   try{
      const res = await fetch(`${API_BASE}/notes?userId=${userId}`)
      if (res.ok) return await res.json();
   }
   catch(err)
   {
      console.log(err)
   }
}

export async function createNote(userId, title, content, date, lastEdit, deletedAt)
{
   try
   {
      const res = await fetch(`${API_BASE}/notes`,{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({userId, title, content, date, lastEdit, deletedAt})
      }  
      )
   
      return res.json();
   }
   catch(err)
   {
      console.log(err)
   }
}

export async function updateNote(id, changes)
{
   try{
      await fetch(`${API_BASE}/notes/${id}`, {
         method: "PUT",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(changes),
      })
   }
   catch(err)
   {
      console.log(err);
   }
}

export async function updateNotesContent(id, contentChanges)
{
   try{
      const res = await fetch(`${API_BASE}/notes/${id}`,{
      method: "PUT",
      headers: { "Content-Type": "application/json" },
         body: JSON.stringify({content: contentChanges})
      })
      return await res.json();
   }
   catch(err)
   {
      console.log(err)
   }

}

export async function deleteAll(notes)
{
   try{
      await Promise.all(
      notes.filter(note => note.isDeleted)
      .map(note => (
            fetch(`${API_BASE}/notes/${note.id}`, {method: "DELETE"})
         ))
      )
      return true;
   }
   catch(err)
   {
      console.log(err)
   }
}

export async function cleanupNotes(id)
{
   try{
      await fetch(`${API_BASE}/notes/${id}`, {method: "DELETE"});
   }
   catch(err)
   {
      console.log(err)
   }
}