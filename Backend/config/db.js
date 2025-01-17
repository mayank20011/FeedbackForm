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
    console.log(process.env.DBURI);
    console.log(`Connection to db Refused ${err}`);
  })



  // ssh-rsa AAAAB3NzaC1yc2EAAAABJQAAAQEAuaW0Y+9F9YntXsYHsm6x3Z/mWWOnq1K2ezJGKmliw2H08HKscqfBf4G2ZQkkaepBWJbAyWMWwHILoIJUBTsxtYwZS1llW3bra+BS86yh6622DSAW/NNtxWI/dN9/FiOniNYXAL0LlzpVuFj0vRFMNTr8WA4rkgUCi+7bUZNi4UosTIDSg3Y4r+nqOsvJgHpp/m9dSdM8GJLkgQ8Npyck9U3FEVYrTYyk5jA2/V4QcoSzC03fOYvvzyhz4Zr8euMH32/lb96gX08NcPowEwhUWMGNh6hDiCQT9HfZnFeJ5ojVk/J8WOjFqoxaEzqSCExSdD0oTuxQBul2JSMz1u7VEQ== rsa-key-20241204