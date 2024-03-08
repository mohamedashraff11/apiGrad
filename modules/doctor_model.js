

import mongoose from "mongoose";


const doctorSchema =new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:true
        },

        email:{
            type:String,
            required:true,
            unique:true
        },
        
        password:{
            type:String,
            required:true,
        },

        Subjects:[{
            type:mongoose.Types.ObjectId,
            ref:"subject"
        }],   
    },
    {timestamps:true}  
);

export default mongoose.model("doctor",doctorSchema);