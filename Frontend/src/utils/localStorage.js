export function setLocalStorage(key, value)
{
   try{
      localStorage.setItem(key, JSON.stringify(value));
   }
   catch(err)
   {
      console.log(err);
   }
}

export function getLocalStorage(key)
{
   try{
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : undefined;
   }
   catch(err)
   {
      console.log(err)
   }
}

export function updateLocalStorage(key, updates)
{
   let userData = JSON.parse(localStorage.getItem(key));
   if(Object.keys(userData).length > 0)
      userData = {...userData, ...updates};
   localStorage.setItem("currentUser", JSON.stringify(userData));
}

export function removeLocalStorage(key)
{
   try
   {
      localStorage.removeItem(key);
   }
   catch(err)
   {
      console.log(err);
   }
}