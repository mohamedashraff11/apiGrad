

import mongoose from "mongoose";


const assimentSchema =new mongoose.Schema(
    {
        file:{
            type:String,
            require:true
        },

        note:{
            type:String,
            require:true
        }, 
        student:{
            type:mongoose.Types.ObjectId,
            require:true,
            ref:"user"
        },
       

        
    },
    {timestamps:true}  
);

export default mongoose.model("assiment",assimentSchema);