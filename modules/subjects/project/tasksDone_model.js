

import mongoose from "mongoose";


const tasksDoneSchema =new mongoose.Schema(
    {
        file:{
            type:String,
            require:true
        },

        desc:{
            type:String,
            require:true
        }, 
        student:{
            type:mongoose.Types.ObjectId,
            ref:"user"
        },
               
    },
    {timestamps:true}  
);

export default mongoose.model("tasksDone",tasksDoneSchema);