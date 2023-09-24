const express = require('express');
const repo= require('./database/db');
const dotenv = require('dotenv')
const router = require('./routes/route');
const app = express();
const PORT = 8000;
dotenv.config();
const DB_USER = process.env.DB_USER;
const PASSWORD = process.env.DB_PASSWORD;
app.use('/', router.router);
app.listen(PORT, ()=>{
    console.log(`server started at port ${PORT}`);
})
repo.Connection(DB_USER,PASSWORD);