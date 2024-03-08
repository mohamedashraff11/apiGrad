import express from "express";
import { register } from "../controller/doctor_controller.js";
import { login } from "../controller/doctor_controller.js";
import { getuserData } from "../controller/doctor_controller.js";
const router=express.Router();


router.post('/register',register);
router.post('/login',login);
router.post('/getuserData',getuserData);

export default router;