

import mongoose from "mongoose";


const postSchema =new mongoose.Schema(
    {
        Doctor:{
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

export default mongoose.model("post",postSchema);