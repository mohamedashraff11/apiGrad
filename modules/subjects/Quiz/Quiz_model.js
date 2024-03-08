
import mongoose from "mongoose";


const quizSchema =new mongoose.Schema(
    {
        QuizName:{
            type:String,
            require:true
        },
        QuizDesc:{
            type:String,
        },
        quistions:[{
            type:mongoose.Types.ObjectId,
            ref:"question"
        }], 

        results:[{
            type:mongoose.Types.ObjectId,
            ref:"result"
        }],  
    },
    {timestamps:true}  
);

export default mongoose.model("Quiz",quizSchema);