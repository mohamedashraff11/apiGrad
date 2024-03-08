import express from "express";

import {createQuiz } from "../../../controller/subjects/Quiz/Quiz_controller.js";
import {getQuiz } from "../../../controller/subjects/Quiz/Quiz_controller.js";

const router=express.Router();



router.post('/createQuiz',createQuiz);
router.post('/getQuiz',getQuiz);

export default router;