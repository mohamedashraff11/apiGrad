import express from "express";
import multer from 'multer'
import {createAssiment } from "../../controller/subjects/assiment_controller.js";
import {getAssiment } from "../../controller/subjects/assiment_controller.js";

const router=express.Router();

const storage =multer.diskStorage({
    destination :function(req,file,cb){
        req.body.file, 
        cb(null,'uploaded/images/')
    },
    filename:(req,file,cd)=>{
        req.body.file, 
        cd(null,file.originalname+'-'+Date.now()+'.pdf');
    }
});

const upload=multer({
    storage:storage
})

router.post('/createAssiment',upload.single('file'),createAssiment);
router.post('/getAssiment',getAssiment);

export default router;