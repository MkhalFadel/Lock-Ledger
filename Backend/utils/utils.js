function updateUsersFields(data)
{
   const fields = {};
   if(data.username) fields.username = data.username;
   if(data.email) fields.email = data.email;
   if(data.password) fields.password = data.password
   if(data.pin) fields.pin = data.pin;
   if(data.image_url) fields.image_url = data.image_url;

   return fields;
}

function updateNotesFields(data)
{
   const fields = {};
   if(data.title) fields.title = data.title;
   if(data.content) fields.content = data.content;
   if(data.is_favorite) fields.is_favorite = data.is_favorite
   if(data.is_deleted) fields.is_deleted = data.is_deleted;

   return fields;
}

function updateLedgerFields(data)
{
   const fields = {};
   if(data.title) fields.title = data.title;
   if(data.date) fields.date = data.date;
   if(data.type) fields.type = data.type
   if(data.amount) fields.amount = data.amount;

   return fields;
}

module.exports = {updateNotesFields, updateUsersFields, updateLedgerFields}