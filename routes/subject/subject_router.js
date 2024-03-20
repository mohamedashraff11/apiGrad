import express from "express";
import multer from 'multer'
import { createSubject } from "../../controller/subjects/subject_controller.js";
import { getSubjects } from "../../controller/subjects/subject_controller.js";
import { getSubjectsProject } from "../../controller/subjects/subject_controller.js";
import { getAllAssignmentsBySubjectId } from "../../controller/subjects/subject_controller.js";

const router=express.Router();

const storage =multer.diskStorage({
    destination :function(req,file,cb){
        cb(null,'uploaded/images')
    },
    filename:(req,file,cd)=>{
        cd(null,file.originalname+'-'+Date.now()+'.png');
    }
});

const upload=multer({
    storage:storage
})

router.post('/createSubject',upload.single('photos'),createSubject);
router.post('/getSubjects',getSubjects);
router.post('/getSubjectsProject',getSubjectsProject);
router.post('/getAllAssignmentsBySubjectId',getAllAssignmentsBySubjectId);
export default router;
