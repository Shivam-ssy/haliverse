import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Classroom } from "../models/classroom.model.js";
import { Timetable } from "../models/timetable.models.js";

const createClassroom=asyncHandler(async(req,res)=>{
    console.log("req data",req.body);
    const user=req.user
    const {name,startTime,endTime,day,teachers}=req.body
    if(!name || !startTime || !endTime || !day || !day.length){
        throw new ApiError(400,"Please Enter name, start time , end time , atleast one day for classroom", )
    }
    const room =await Classroom.create({
        name,
        schedule:{
            startTime,
            endTime,
            day
        },
        teachers,
        createdBy:user._id
    })
    if(!room)
        throw new ApiError(401,"Room not created")

    res.status(200)
    .json(
        new ApiResponse(
            200,
            room,
            "Classroom Created Successfully"
        )
    )
})

const listClassroom=asyncHandler(async(req,res)=>{
    const room =await Classroom.find()
    if(!room)
        throw new ApiError(404,"no room found")

    res.status(200)
    .json(
        new ApiResponse(200,room,"class fetched successfully")
    )
})

const addTeacherToClassroom=asyncHandler(async(req,res)=>{
    const {classroom,teachers}=req.body
    console.log(req.body);
    
    if(!classroom)
        throw new ApiError(400,"Please select a classroom")

    const updateClassroom=await Classroom.updateOne({_id:classroom},{

        $set:{
            teachers:teachers
        }
    })
    console.log(updateClassroom);
    
    if(!updateClassroom)
        throw new ApiError(401,"Updation failed")

    res.status(200)
    .json(
        new ApiResponse(200, updateClassroom,"Assign teacher successfully")
    )
})

const addStudentClassroom=asyncHandler(async(req,res)=>{
    const {classroom,studentId}=req.body
    console.log(classroom);

    if(!classroom ||!studentId || !studentId.length)
        throw new ApiError(400,"Please select a student")

    const students= await Classroom.updateOne({_id:classroom},{
        $set:{
            students:{$each:studentId}
        }
    })
    if(!students)
        throw new ApiError(401,"Students not added")

    res.status(200)
    .json(
        new ApiResponse(200,students,"Student added successfully")
    )
})

const setPeriod=asyncHandler(async(req,res)=>{
    const {subject,day,startTime,endTime,classroom}=req.body
    const createdBy=req.user

    if(!subject || !day || !day.length || !startTime || !endTime || !classroom)
        throw ApiError(400, "all fields are required")

    const timetable= await Timetable.create({
        subject,
        day,
        startTime,
        endTime,
        classroom,
        createdBy
    })
    if(!timetable)
        throw new ApiError(401,"Time table not created ")

     res.status(200)
     .json(
        new ApiResponse(200,
            timetable,
            "time table created successfully"
        )
     )
})
export {createClassroom,listClassroom,addTeacherToClassroom,addStudentClassroom,setPeriod}
