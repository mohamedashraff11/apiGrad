import chapter from "../../modules/subjects/chapter_model.js"
import LevelnumSchema from '../../modules/levelnum_models.js'
import subject from '../../modules/subjects/Subjects_model.js'



export const createChapter=async(req,res)=>{
    const subjectId=req.body.subjectId
    const newsubject=new chapter({
        chapterName:req.body.chapterName, 
        vedioUrl:req.body.vedioUrl, 
        Doctor:req.body.Doctor, 
        desc:req.body.desc, 
    })
   try{
    const savedchapter=await newsubject.save();
    await subject.findByIdAndUpdate(subjectId,{$push:{subjectChapters:savedchapter._id}})
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


export const getSubjects=async(req,res)=>{
    const id = req.body.id;
    try{
        const data=await subject.findById(id).populate("subjectChapters")

        if(data){
            res.status(200).json({
                success:true,
                message:"succesfully ",
                data:data.subjectChapters
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


export const getChapter=async(req,res)=>{
    const id = req.body.id;
    try{
        const data=await chapter.findById(id)

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