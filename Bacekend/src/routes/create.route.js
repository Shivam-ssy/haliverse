import { Router } from "express";
import { createStudent,createTeacher } from "../controllers/register.controller.js";
import { verifyRole } from "../middleware/role.middleware.js";
import { verifyUser } from "../middleware/auth.middleware.js";


const router=Router()

router.route("/create-student").post(verifyUser,verifyRole(['teacher','principal']),createStudent)
router.route("/create-teacher").post(verifyUser,verifyRole(['principal']),createTeacher)

export default router