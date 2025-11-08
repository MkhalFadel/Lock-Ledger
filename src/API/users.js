import bcrypt from 'bcryptjs'

const API_BASE = "https://68befe509c70953d96ee6f2f.mockapi.io/lockLedger";
fetch(`${API_BASE}/users`).then(r => r.json()).then(console.log)

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

export default async function createUser(username, email, password, pin) {
   try {
      username = username.trim();
      email = email.trim();

      // Fetch all users
      const res = await fetch(`${API_BASE}/users`);
      if (!res.ok) throw new Error("Failed to fetch users");

      const users = await res.json();
      const normalizedUsers = Array.isArray(users) ? users.map(u => ({
         username: u.username?.trim(),
         email: u.email?.trim(),
      })) : [];

      // Check duplicates
      const emailTaken = normalizedUsers.some(u => u.email === email);
      const usernameTaken = normalizedUsers.some(u => u.username === username);

      if (emailTaken || usernameTaken) {
         console.log("Duplicate found:", { emailTaken, usernameTaken });
         return false;
      }

      // Hash password
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);

      // Create user
      const createRes = await fetch(`${API_BASE}/users`, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ username, email, hashedPassword, pin })
      });

      if (!createRes.ok) throw new Error("Failed to create user");

      return await createRes.json();
   } 
   catch (err) {
      console.error("Create User Error:", err);
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