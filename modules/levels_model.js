

import mongoose from "mongoose";


const LevelsSchema =new mongoose.Schema(
    {
        levels:[{
            type:mongoose.Types.ObjectId,
            ref:"LevelnumSchema"
        }],   
    },
    {timestamps:true}  
);

export default mongoose.model("levels",LevelsSchema);