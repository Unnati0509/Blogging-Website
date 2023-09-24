const mongoose = require('mongoose');
const Connection= async(username,password) =>{
    const URL =`mongodb://${username}:${password}@ac-zfpc8fk-shard-00-00.wppmub7.mongodb.net:27017,ac-zfpc8fk-shard-00-01.wppmub7.mongodb.net:27017,ac-zfpc8fk-shard-00-02.wppmub7.mongodb.net:27017/?ssl=true&replicaSet=atlas-q41g88-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL,{useNewUrlParser:true});
       console.log('db connection established');
    }catch(error){
        console.log('error while connecting db',error);
    }
}

module.exports={
    Connection
}