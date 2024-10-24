require("dotenv").config()
const express = require("express");
const initDb = require('./config/dbConnection');
const authRouter = require("./routes/auth");

var app = express()
initDb();

app.use(express.json());

app.use("/api/auth", authRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT , ()=>{
    console.log(`Server is running at ${PORT}`);
})