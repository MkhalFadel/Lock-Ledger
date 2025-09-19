const errorMessages ={
   emptyInput: "Input is Required",
   invalidPassword: "Password must be at least 8 characters",
   invalidUsername: "Username is invalid",
   invalidPin: "PIN must be at least 6 characters",
   invalidAmount: "Amount must be a Positive value"
}

function hasLetters(str) {
   return /[a-zA-Z]/.test(str);
}

export function validateForm({email, password, name, pin, title, date, type, amount})
{
   const errors = {};

   if(email !== undefined)
      if(!email) errors.email = errorMessages.emptyInput;

   if(password !== undefined)
   {
      if(!password) errors.password = errorMessages.emptyInput;
      else if(password.length < 8) errors.password = errorMessages.invalidPassword;
   }

   if(name !== undefined) 
   {
      if (!name) errors.name = errorMessages.emptyInput;
      else if(!hasLetters(name)) errors.name = errorMessages.invalidUsername;
   }

   if(pin !== undefined)
   {
      if (!pin) errors.pin = errorMessages.emptyInput;
      else if(pin.length < 6) errors.pin = errorMessages.invalidPin
   }

   if(title !== undefined)
      if (!title) errors.title = errorMessages.emptyInput;

   if(date !== undefined)
      if(!date) errors.date = errorMessages.emptyInput;

   if(type !== undefined)
      if(!type) errors.type = errorMessages.emptyInput;

   if(amount !== undefined)
   {
      if(amount < 0) errors.amount = errorMessages.invalidAmount;
   }

   return errors;
}

export function validatePasswordChanges(currentPassword, newPassword)
{
   const errors = {}

   if(!currentPassword.trim("")) errors.currentPassword = errorMessages.emptyInput;
   else if(currentPassword.trim("").length < 8) errors.currentPassword = errorMessages.invalidPassword;

   if(!newPassword.trim("")) errors.newPassword = errorMessages.emptyInput;
   else if(newPassword.trim("").length < 8) errors.newPassword = errorMessages.invalidPassword;

   return errors;
}
