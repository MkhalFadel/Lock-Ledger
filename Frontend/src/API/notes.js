const API_BASE = "http://localhost:5000/api/notes";

async function apiFetch(url, options = {}) {
   let response = await fetch(url, {
      ...options,
      credentials: "include" // IMPORTANT for cookies
   });

   if (response.status === 401) {
      // Try refreshing
      const refreshResponse = await fetch("http://localhost:5000/api/users/refresh", {
         method: "POST",
         credentials: "include"
      });

      console.log(refreshResponse)

      if (refreshResponse.ok) {
         // Retry original request
         response = await fetch(url, {
            ...options,
            credentials: "include"
         });
      } else {
         // Refresh failed → redirect to login
         return;
      }
   }

   return response;
}

export async function fetchNotes(userId)
{
   try{
      const res = await apiFetch(`${API_BASE}/user/${userId}`, {
         credentials: 'include'
      })
      if (res.ok) return await res.json();
   }
   catch(err)
   {
      console.log(err)
   }
}

export async function createNote(user_id, title)
{
   try
   {
      const res = await apiFetch(`${API_BASE}/`,{
      method: "POST",
      credentials: 'include',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({user_id, title})
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
      await apiFetch(`${API_BASE}/${id}`, {
         method: "PUT",
         credentials: 'include',
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
      const res = await apiFetch(`${API_BASE}/${id}`,{
      method: "PUT",
      credentials: 'include',
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
      notes.filter(note => note.is_deleted)
      .map(note => (
            apiFetch(`${API_BASE}/${note.id}`, {
               method: "DELETE",
               credentials: 'include'
            })
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
      await apiFetch(`${API_BASE}/${id}`, {
         method: "DELETE",
         credentials: 'include'
      });
   }
   catch(err)
   {
      console.log(err)
   }
}