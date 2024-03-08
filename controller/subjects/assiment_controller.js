import assiment from "../../modules/subjects/assiment_model.js"
import LevelnumSchema from '../../modules/levelnum_models.js'
import subject from '../../modules/subjects/Subjects_model.js'



export const createAssiment=async(req,res)=>{
    const subjectId=req.body.subjectId
    const newAssiment=new assiment({
        file:req.file.path, 
        note:req.body.note, 
        student:req.body.student, 
    })
   try{
    const savedAssiment=await newAssiment.save();
    await subject.findByIdAndUpdate(subjectId,{$push:{subjectAssiments:savedAssiment._id}})
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
       console.log(err)
   }

}


export const getAssiment=async(req,res)=>{
    const id = req.body.id;
    try{
        const data=await assiment.findById(id).populate("student","username email")

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