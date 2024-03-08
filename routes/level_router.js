import express from "express";

import { creatLevel } from "../controller/level_controller.js";
import { getSingleLevel } from "../controller/level_controller.js";

const router=express.Router();

router.post('/creatLevel',creatLevel);
router.post('/getSingleLevel',getSingleLevel);

export default router;
