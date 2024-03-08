import Quiz from "../../../modules/subjects/Quiz/Quiz_model.js"
import subject from '../../../modules/subjects/Subjects_model.js'



export const createQuiz=async(req,res)=>{
    const subjectId=req.body.subjectId
    const newQuiz=new Quiz({
        QuizName:req.body.QuizName, 
        QuizDesc:req.body.QuizDesc, 
        quistions:req.body.quistions, 
    })
   try{
    const savedQuiz=await newQuiz.save();
    await subject.findByIdAndUpdate(subjectId,{$push:{subjectQuizs:savedQuiz._id}})
    res.status(200).json({
        success:true,
        message:"success",
    });
   }
   catch(err){
          res.status(404).json({
           success:false,
           message:"faild",
       });
       throw(err);
   }

}


export const getQuiz=async(req,res)=>{
    const id = req.body.id;
    try{
        const data=await Quiz.findById(id).populate("quistions")

        if(data){
            res.status(200).json({
                success:true,
                message:"succesfully ",
                data:data
            });
        }else{
            res.status(404).json({
                success:false,
                message:"faild ",
            }); 
        }
           
        
        
    }
    catch(err){
       
        res.status(404).json({
            success:false,
            message:"faild ",
        });
        throw(err);
    }
}