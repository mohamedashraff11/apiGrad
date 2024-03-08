

import mongoose from "mongoose";


const taskSchema =new mongoose.Schema(
    {

        taskName:{
            type:String,
            require:true
        },
        taskDesc:{
            type:String,
            require:true
        },

        tasksDone:[{
            type:mongoose.Types.ObjectId,
            ref:"tasksDone"
        }]

        
    },
    {timestamps:true}  
);

export default mongoose.model("task",taskSchema);