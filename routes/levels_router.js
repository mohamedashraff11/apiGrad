import express from "express";
import { creatLevels } from "../controller/Levels_controller.js";
import { getSingleLevels } from "../controller/Levels_controller.js";
import { getAllLevels } from "../controller/Levels_controller.js";


const router=express.Router();


router.post('/levels',creatLevels);
router.post('/getlevels',getSingleLevels);
router.post('/getAllLevels',getAllLevels);

export default router;
