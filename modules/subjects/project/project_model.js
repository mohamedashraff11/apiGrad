

import mongoose from "mongoose";


const projectSchema =new mongoose.Schema(
    {

        projectTitle:{
            type:String,
            require:true
        },
        projectDesc:{
            type:String,
            require:true
        },

        projectTasks:[{
            type:mongoose.Types.ObjectId,
            ref:"task"
        }], 
        

        
    },
    {timestamps:true}  
);

export default mongoose.model("project",projectSchema);