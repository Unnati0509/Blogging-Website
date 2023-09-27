const express = require('express');
const repo= require('./database/db');
const dotenv = require('dotenv')
const route = require('./routes/route');
const cors = require('cors');
const bodyParser = require('body-parser');
dotenv.config();
const app = express();
const PORT = 8000;

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200, // Some legacy browsers (IE11) may require 200 OK response
  }));
  
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', route.router);

repo.Connection();
app.listen(PORT, ()=>{
    console.log(`server started at port ${PORT}`);
})