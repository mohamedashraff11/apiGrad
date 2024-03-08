

import mongoose from "mongoose";


const requestSchema =new mongoose.Schema(
    {
        students:[{
            type:mongoose.Types.ObjectId,
            ref:"user" 
        }],
        
    },
    {timestamps:true}  
);

export default mongoose.model("request",requestSchema);