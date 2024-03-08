import express from "express";

import { createChapter } from "../../controller/subjects/chapter_controller.js";
import { getSubjects } from "../../controller/subjects/chapter_controller.js";
import { getChapter } from "../../controller/subjects/chapter_controller.js";

const router=express.Router();



router.post('/createChapter',createChapter);
router.post('/getSubjects',getSubjects);
router.post('/getChapter',getChapter);

export default router;
