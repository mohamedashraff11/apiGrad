import project from "../../modules/subjects/project/project_model.js"
import projectTask from "../../modules/subjects/project/task_model.js"
import projectTaskDone from "../../modules/subjects/project/tasksDone_model.js"
import LevelnumSchema from '../../modules/levelnum_models.js'
import subject from '../../modules/subjects/Subjects_model.js'



export const createProject=async(req,res)=>{
    const subjectId=req.body.subjectId
    const newAssiment=new project({
        projectTitle:req.body.projectTitle, 
        projectDesc:req.body.projectDesc, 
        projectTasks:req.body.projectTasks,
    })
   try{
    const savedProject=await newAssiment.save();
    await subject.findByIdAndUpdate(subjectId,{$push:{subjectProjects:savedProject._id}})
    res.status(200).json({
        success:true,
        message:"success",
    });
   }
   catch(err){
          res.status(404).json({
           success:false,
           message:"faild",
       });
       throw(err);
   }

}


export const createProjectTasks=async(req,res)=>{
    const projectId=req.body.projectId
    const newprojectTask=new projectTask({
        taskName:req.body.taskName, 
        taskDesc:req.body.taskDesc, 
        tasksDone:req.body.tasksDone,
    })
   try{
    const savedProjectTask=await newprojectTask.save();
    await project.findByIdAndUpdate(projectId,{$push:{projectTasks:savedProjectTask._id}})
    res.status(200).json({
        success:true,
        message:"success",
    });
   }
   catch(err){
          res.status(404).json({
           success:false,
           message:"faild",
       });
       throw(err);
   }

}


export const createProjectTasksDone=async(req,res)=>{
    const projectTasksId=req.body.projectTasksId
    const newprojectTaskDone=new projectTaskDone({
        file:req.body.file, 
        desc:req.body.desc, 
        student:req.body.student,
    })
   try{
    const savedProjectTaskDone=await newprojectTaskDone.save();
    await projectTask.findByIdAndUpdate(projectTasksId,{$push:{tasksDone:savedProjectTaskDone._id}})
    res.status(200).json({
        success:true,
        message:"success",
    });
   }
   catch(err){
          res.status(404).json({
           success:false,
           message:"faild",
       });
       throw(err);
   }

}