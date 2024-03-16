import express from "express";

import { createRequest } from "../../controller/subjects/requests_controller.js";
import { checkStudent } from "../../controller/subjects/requests_controller.js";
import { getSubjectRequests } from "../../controller/subjects/requests_controller.js";

import { getSubjects } from "../../controller/subjects/requests_controller.js";

const router=express.Router();



router.post('/createRequest',createRequest);
router.post('/checkStudent',checkStudent);
router.post('/getSubjectRequests',getSubjectRequests);
router.post('/getSubjects',getSubjects);
export default router;
