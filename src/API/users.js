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

      const emailRes = await fetch(`${API_BASE}/users?email=${email}`);
      let emailData = await emailRes.json();
      if(typeof emailData === 'string') emailData = [];

      const usernameRes = await fetch(`${API_BASE}/users?username=${username}`);
      let usernameData = await usernameRes.json();
      if(typeof usernameData === 'string') usernameData = [];

      if(emailData.length > 0 || usernameData.length > 0) return false;

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