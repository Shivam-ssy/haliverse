import { Router } from "express";
import { createStudent,createTeacher } from "../controllers/register.controller.js";
import { addStudentClassroom, addTeacherToClassroom, createClassroom, setPeriod } from "../controllers/classroom.controller.js";
import { verifyRole } from "../middleware/role.middleware.js";
import { verifyUser } from "../middleware/auth.middleware.js";


const router=Router()

router.route("/create-student").post(verifyUser,verifyRole(['teacher','principal']),createStudent)
router.route("/create-teacher").post(verifyUser,verifyRole(['principal']),createTeacher)
router.route("/create-classroom").post(verifyUser,verifyRole(["principal"]),createClassroom)
router.route("/add-teacher").post(verifyUser,verifyRole(['principal'],addTeacherToClassroom))
router.route("/add-student").post(verifyUser,verifyRole(['principal']),addStudentClassroom)
router.route('/create-timetable').post(verifyUser,verifyRole(['teacher']),setPeriod)

export default router