export const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const MONTHS = [
   "January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"
];

export function formatTime(time)
{
   return time >= 10 ? time : `0${time}`;
}

export function formatDate(dateString) {
   const date = new Date(dateString);

   const day = String(date.getDate()).padStart(2, "0");
   const month = String(date.getMonth() + 1).padStart(2, "0");
   const year = date.getFullYear();

   return `${year}-${month}-${day}`;
}

export async function apiFetch(url, options = {}) {
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