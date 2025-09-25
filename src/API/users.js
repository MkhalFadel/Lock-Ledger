import bcrypt from 'bcryptjs'

const API_BASE = "https://68befe509c70953d96ee6f2f.mockapi.io/lockLedger";

export async function getUserInfo(email)
{
   try{
      const res = await fetch(`${API_BASE}/users?email=${email}`);
      if (res.ok) return await res.json();
   }
   catch(err)
   {
      console.log(err);
   }
}

export default async function createUser(username, email, password, pin)
{
   try{

      const results = await fetch(`${API_BASE}/users`);
      const users = await results.json();
      if (!Array.isArray(users)) users = []

      console.log(users)
      
      const emailTaken = users.some(u => u.email === email)
      const usernameTaken = users.some(u => u.username === username);

      if(emailTaken|| usernameTaken) return false;

      const salt = bcrypt.genSaltSync(10);

      const hashedPassword = bcrypt.hashSync(password, salt);

      const res = await fetch(`${API_BASE}/users`, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({username, email, hashedPassword, pin})
      })

      if(!res.ok) throw new Error("Failed to Create user")

      return await res.json();
   }
   catch(err)
   {
      console.log(err);
   }
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
      console.log(err);
   }
}