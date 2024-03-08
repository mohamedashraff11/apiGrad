
import levels from '../modules/levels_model.js'




export const creatLevels=async(req,res)=>{
    const newLevels=new levels({
        levels:req.body.levels
    })
   try{
    const savedLevel=await newLevels.save();
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


export const getSingleLevels=async(req,res)=>{
    const id = req.body.id;
    try{
        const data=await levels.findById(id).populate('levels','levelNum')
        res.status(200).json({
            success:true,
            message:"succesfully ",
            data:data
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


export const getAllLevels=async(req,res)=>{
    try{
        const Levels=await levels.find({}).populate("levels")
        res.status(200).json({
            success:true,
            message:"succesfully",
            data:Levels
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
