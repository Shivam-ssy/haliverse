import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import path from "path"
const app = express()
import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})

const origin= process.env.FRONTEND_URL ;
// const origin="https://ominous-space-meme-jxvvr64r6462j7w6-5173.app.github.dev"
app.use(cors({
    origin,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials:true,
  })); 

  app.use(cookieParser())

  app.use(express.json({limit: "16kb"}))
  app.use(express.urlencoded({extended: true, limit: "16kb"}))


import authRoute from "./routes/auth.routes.js"
import createRoute from "./routes/create.route.js"
app.get("/",(req,res)=>res.json("hello"))

app.use("/api/v1/users",authRoute)
app.use("/api/v1/create",createRoute)




// creating principal if not exit
export {app}