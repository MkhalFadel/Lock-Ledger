const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.static(path.join(__dirname, "Frontend")))
app.use(express.urlencoded({extended: true}));

app.listen(5000, () => {
   console.log("Server is listening");
})