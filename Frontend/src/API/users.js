const API_BASE = "http://localhost:5000/api/users";

export async function getUserInfo(email, password)
{
   try{
      const res = await fetch(`${API_BASE}/login/`, {
         method: "POST",
         credentials: 'include',
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify({identifier: email, password})
      });
      if (res.ok) return await res.json();
   }
   catch(err)
   {
      console.log(err);
   }
}

export default async function createUser(username, email, password, pin) {
   try {
      username = username.trim();
      email = email.trim();
      pin = Number(pin)

      // Create user
      const res = await fetch(`${API_BASE}/`, {
         method: "POST",
         credentials: 'include',
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ username, email, password, pin })
      });

      if (!res.ok) throw new Error("Failed to create user");

      return await res.json();
   } 
   catch (err) {
      console.error("Create User Error:", err);
   }
}

export async function updateInfo(id ,info)
{
   try{
      const res = await fetch(`${API_BASE}/${id}`, {
         method: "PUT",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(info)
      })

      return await res.json();
   }
   catch(err)
   {
      console.log(err);
   }
}