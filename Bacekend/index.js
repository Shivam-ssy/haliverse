import connectDB from "./src/DB/db.js";
import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})

import { app } from "./src/app.js";
import createPrincipal from "./src/controllers/principal.controller.js";

connectDB()
.then(()=>{
    app.listen(3000,()=>{
        createPrincipal().then(()=>console.log("Principal created")).catch((error)=>console.log("error while creating principal",error));
        
        console.log("App is listing on port 3000")
    })
})
