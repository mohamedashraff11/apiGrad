

import mongoose from "mongoose";


const chapterSchema =new mongoose.Schema(
    {

        chapterName:{
            type:String,
            require:true  
        },
        vedioUrl:{
            type:String,
            require:true
        },

        desc:{
            type:String,
            require:true
        },

        
    },
    {timestamps:true}  
);

export default mongoose.model("chapter",chapterSchema);