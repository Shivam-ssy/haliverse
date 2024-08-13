import { Router } from "express";
import { login,getStudent,getTeachers,getCurrentUser } from "../controllers/user.controllers.js";
import { verifyUser } from "../middleware/auth.middleware.js";
import { verifyRole } from "../middleware/role.middleware.js";
import { listClassroom } from "../controllers/classroom.controller.js";

const router=Router()

router.route("/login").post(login)

//protected routes

router.route("/get-teacher").get(verifyUser, verifyRole(["principal"]),getTeachers)
router.route("/get-student").get(verifyUser, verifyRole(["principal","teacher"]),getStudent)
router.route("/current-user").get(verifyUser,getCurrentUser)
router.route("/get-classroom").get(verifyUser,listClassroom)
export default router