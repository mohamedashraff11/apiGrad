

import mongoose from "mongoose";


const subjectsSchema =new mongoose.Schema(
    {
        subjectName:{
            type:String,
            require:true
        },

        subjectImage:{
            type:String,
            require:true
        },

        subjectStudents:[{
            type:mongoose.Types.ObjectId,
            ref:"user"
        }],
        subjectDoctor:{
            type:mongoose.Types.ObjectId,
            ref:"Doctor"
        },

        subjectRequests:[{
            type:mongoose.Types.ObjectId,
            ref:"request"
        }],
  
        subjectChapters:[{
            type:mongoose.Types.ObjectId,
            ref:"chapter"
        }],   
        subjectQuizs:[{
            type:mongoose.Types.ObjectId,
            ref:"Quiz"
        }],  
        subjectAssiments:[{
            type:mongoose.Types.ObjectId,
            ref:"assiment"
        }],  
        subjectBooks:[{
            type:mongoose.Types.ObjectId,
            ref:""
        }],
        subjectQuestionbanks:[{
            type:mongoose.Types.ObjectId,
            ref:""
        }],    
        subjectProjects:[{
            type:mongoose.Types.ObjectId,
            ref:"project"
        }],  

        subjectPosts:[{
            type:mongoose.Types.ObjectId,
            ref:"post"
        }],  
    },
    {timestamps:true}  
);

export default mongoose.model("subject",subjectsSchema);