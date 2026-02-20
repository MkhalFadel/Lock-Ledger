const express = require("express");
const path = require("path");
const cors = require("cors");
const users = require("./Routes/usersRoute");
const notesRoute = require('./Routes/notesRoute');
const ledgerRoute = require('./Routes/ledgerRoute');
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors({
   credentials: true,
   origin: 'http://localhost:5173'
}))
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "Frontend")))
app.use(express.urlencoded({extended: true}));

app.use('/api/users', users);
app.use('/api/notes', notesRoute);
app.use('/api/ledger', ledgerRoute);

app.listen(5000, () => {
   console.log("Server is listening");
})