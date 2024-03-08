import result from "../../../modules/subjects/Quiz/results_model.js"
import Quiz from "../../../modules/subjects/Quiz/Quiz_model.js"



export const createResult=async(req,res)=>{
    const QuizId=req.body.QuizId
    const newResult=new result({
        studentId:req.body.studentId, 
        result:req.body.result, 
    })
   try{
    const savedResult=await newResult.save();
    await Quiz.findByIdAndUpdate(QuizId,{$push:{quistions:savedResult._id}})
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


export const getResult=async(req,res)=>{
    const id = req.body.id;
    try{
        const data=await result.findById(id).populate("studentId")

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