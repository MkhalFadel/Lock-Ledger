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