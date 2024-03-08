import express from "express";

import { createPost } from "../../controller/subjects/post_controller.js";
import { getPost } from "../../controller/subjects/post_controller.js";


const router=express.Router();



router.post('/createPost',createPost);
router.post('/getPost',getPost);


export default router;
