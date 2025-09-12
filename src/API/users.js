const API_BASE = "https://68befe509c70953d96ee6f2f.mockapi.io/lockLedger";

export async function getUserInfo(email)
{
   try{
      const res = await fetch(`${API_BASE}/users?email=${email}`);
      if (res.ok) return res.json();
   }
   catch(err)
   {
      throw new Error("Faild to Find user Data", err);
   }
}

export default async function createUser(username, email, password, pin)
{
   try{
      const res = await fetch(`${API_BASE}/users`, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({username, email, password, pin})
      })
   }
   catch(err)
   {
      throw new Error("Failed to Create User", err)
   }

   //console.log(await res.json());
}

export async function updateInfo(id ,info)
{
   try{
      const res = await fetch(`${API_BASE}/users/${id}`, {
         method: "PUT",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(info)
      })

      return await res.json();
   }
   catch(err)
   {
      throw new Error("Faild to update user Info", err);
   }
}