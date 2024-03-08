import express from "express";

import {createQuestion } from "../../../controller/subjects/Quiz/question_controller.js";
import {getQuestion } from "../../../controller/subjects/Quiz/question_controller.js";

const router=express.Router();



router.post('/createQuestion',createQuestion);
router.post('/getQuestion',getQuestion);

export default router;