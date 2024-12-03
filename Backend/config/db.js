import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({path:'./config//config.env'});

mongoose.connect(`${process.env.DBURI}`)
.then((response)=>
  {
    console.log(`Connection to db is Successfull`);
  })
.catch((err)=>
  {
    console.log("Connection to db Refused");
  })