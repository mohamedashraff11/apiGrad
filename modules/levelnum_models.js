

import mongoose from "mongoose";


const LevelnumSchema =new mongoose.Schema(
    {
        levelNum:{
            type:String,
            require:true
        },
        Subjects:[{
            type:mongoose.Types.ObjectId,
            ref:"subject"
        }],   
    },
    {timestamps:true}  
);

export default mongoose.model("LevelnumSchema",LevelnumSchema);