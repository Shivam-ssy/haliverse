import { Users } from "../models/user.models.js";
import { ApiError } from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js";
const options = {
   
    httpOnly:true,
    secure:true,
    maxAge:7200000,
    sameSite: 'None'
}

const generateAccessAndRefereshTokens = async(userId) =>{
    try {
        const user = await Users.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}


    } catch (error) {
        throw new ApiError(500,error, "Something went wrong while generating referesh and access token")
    }
}

const login= asyncHandler(async (req,res)=>{

    const {email,password}=req.body
    if(!email || !password)
        throw new ApiError(400, "Please Enter Email and Password") 
    
    const user=await Users.findOne({email})
    if(!user)
        throw new ApiError(404, "User not found")

    const isPasswordValid=user.isPasswordCorrect(password)
    
    if(!isPasswordValid)
        throw new ApiError(401,"Invalid User Credential")

    const {accessToken, refreshToken} = await generateAccessAndRefereshTokens(user._id)

    const loggedInUser = await Users.findById(user._id).select("-password -refreshToken")

    return res
    .status(200)
    .cookie("accessToken", accessToken,options)
    .cookie("refreshToken", refreshToken,options)
    .json(
        new ApiResponse(
            200, 
            {
                user: loggedInUser
            },
            "User logged In Successfully"
        )
    )
})

const getTeachers=asyncHandler(async(req,res)=>{
    try {
        const teacher=await Users.find({role:"teacher"})
        if(!teacher)
            throw new ApiError(500,"Something went wrong while fetching the teacher")
        res
        .status(200)
        .json(
            new ApiResponse(
                200,
                teacher,
                "Teacher fetched successfully"
            )
        )
    } catch (error) {
        throw new ApiError(500,error.message,"Something went wrong while fetching the Teacher")
    }
})


const getStudent=asyncHandler(async(req,res)=>{
    try {
        const student=await Users.find({role:"student"})
        if(!student)
            throw new ApiError(500,"Something went wrong while fetching the student")
        res
        .status(200)
        .json(
            new ApiResponse(
                200,
                student,
                "student fetched successfully"
            )
        )
    } catch (error) {
        throw new ApiError(500,error.message,"Something went wrong while fetching the student")
    }
})

const getCurrentUser= asyncHandler(async(req, res)=>{
    const user=req.user
    // console.log(user);
    
    if(!user)
        throw new ApiError(404,"User Not Found")

    res
    .status(200)
    .json(
        new ApiResponse(
            200,
            user,
            "User Fetched successfully"
        )
    )
})
export {login,getTeachers,getStudent,getCurrentUser}