const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Connection= async() =>{
    const URL = process.env.DB_URL;
    try{
       await mongoose.connect(URL,
        {useNewUrlParser:true}
        );
       console.log('db connection established');
    }catch(error){
        console.log('error while connecting db',error);
    }
}

module.exports={
    Connection,
}