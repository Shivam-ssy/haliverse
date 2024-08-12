import mongoose from "mongoose";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})
const User= mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    email:{
        require:true,
        type:String
    },
    password:{
        require:true,
        type:String
    },
    role:{
        require:true,
        type:String,
        enum:["principal","teacher","student"]
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        default:null,
    },
    refreshToken:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

User.pre("save", async function (next){
    if(!this.isModified("password")) return next()
    
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

User.methods.isPasswordCorrect=async function (password){
    return await bcrypt.compare(password,this.password)
}

User.methods.generateAccessToken= function (){
    return jwt.sign(
        {
            _id:this._id,
            name:this.name,
            email:this.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

User.methods.generateRefreshToken= function(){
    return jwt.sign(
        {
            _id:this._id,

        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

const Users=mongoose.model("Users",User)
export {Users}