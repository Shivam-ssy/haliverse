import { Users } from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createStudent=asyncHandler(async(req,res)=>{
    const {name,email,password}=req.body
    if(!name || !email || !password){
        throw new ApiError(400, "Please Enter the Name, Email and Password for the user")
    }

    const existedUser=await Users.findOne({email})
    if(existedUser){
        throw new ApiError(409,"Email Already Exist")
    }

    const newStudent= await Users.create({
        email,
        password,
        role:'student',
        createdBy:req.user
    })
    
    const student = await Users.findById(newStudent._id).select("-password -refreshToken")

    if(!student)
        throw new ApiError(500,"Something went wrong while creating the student")

    res.status(200).json(
        new ApiResponse(200,student,"Student created successfully")
    )
})
const createTeacher=asyncHandler(async(req,res)=>{
    const {name,email,password}=req.body
    if(!name || !email || !password){
        throw new ApiError(400, "Please Enter the Name, Email and Password for the user")
    }

    const existedUser=await Users.findOne({email})
    if(existedUser){
        throw new ApiError(409,"Email Already Exist")
    }

    const newTeacher= await Users.create({
        email,
        password,
        role:'teacher',
    })
    
    const teacher = await Users.findById(newTeacher._id).select("-password -refreshToken")

    if(!teacher)
        throw new ApiError(500,"Something went wrong while creating the teacher")

    res.status(200).json(
        new ApiResponse(200,teacher,"Teacher created successfully")
    )
})


export {createTeacher,createStudent}