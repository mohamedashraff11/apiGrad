import express from "express";

import { createProject} from "../../controller/subjects/project_controller.js";
import { createProjectTasks} from "../../controller/subjects/project_controller.js";
import { createProjectTasksDone} from "../../controller/subjects/project_controller.js";

const router=express.Router();



router.post('/createProject',createProject);
router.post('/createProjectTasks',createProjectTasks);
router.post('/createProjectTasksDone',createProjectTasksDone);

export default router;