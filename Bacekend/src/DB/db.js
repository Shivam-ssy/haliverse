import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})
const connectDB= async()=>{
    try {
        await mongoose.connect(`${process.env.DB_URL}`).then(()=>console.log("Connection to DB Successful"))
    } catch (error) {
        console.log("Error while connection of Database: \n",error )
    }
}

export default connectDB