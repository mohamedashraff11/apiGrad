import LevelnumSchema from '../modules/levelnum_models.js'
import levels from '../modules/levels_model.js'

export const creatLevel=async(req,res)=>{
    const levelsId=req.body.levelsId
    const newLevel=new LevelnumSchema({
        levelNum:req.body.levelNum,
        useSubjectsrname:req.body.Subjects, 
    })
   try{
    const savedLevel=await newLevel.save();
    await levels.findByIdAndUpdate(levelsId,{$push:{levels:savedLevel._id}})
    res.status(200).json({
        success:true,
        message:"success",
    });
   }
   catch(err){
       throw(err);
       res.status(404).json({
           success:false,
           message:"faild",
       });
   }

}



export const getSingleLevel=async(req,res)=>{
    const id = req.body.id;
    try{
        const level=await LevelnumSchema.findById(id).populate('Subjects',"subjectName subjectImage")
        res.status(200).json({
            success:true,
            message:"succesfully ",
            data:level
        });
    }
    catch(err){
        throw(err);
        res.status(404).json({
            success:false,
            message:"faild ",
        });
    }
}