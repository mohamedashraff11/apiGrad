import question from "../../../modules/subjects/Quiz/question_model.js"
import Quiz from "../../../modules/subjects/Quiz/Quiz_model.js"



export const createQuestion=async(req,res)=>{
    const QuizId=req.body.QuizId
    const newQuestion=new question({
        question:req.body.question, 
        options:req.body.options, 
        correctOption :req.body.correctOption , 
    })
   try{
    const savedQuestion=await newQuestion.save();
    await Quiz.findByIdAndUpdate(QuizId,{$push:{quistions:savedQuestion._id}})
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


export const getQuestion=async(req,res)=>{
    const id = req.body.id;
    try{
        const data=await question.findById(id).populate("options")

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


