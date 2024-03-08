import subject from "../../modules/subjects/Subjects_model.js"
import LevelnumSchema from '../../modules/levelnum_models.js'
import project from "../../modules/subjects/project/project_model.js"
import doctor from '../../modules/doctor_model.js'


export const createSubject=async(req,res)=>{
    const levelId=req.body.levelId
    const doctorId=req.body.doctorId
    const newsubject=new subject({
        subjectName:req.body.subjectName,
        subjectImage:  req.file.path,
        subjectChapters:req.body.subjectChapters, 
        subjectQuizs:req.body.subjectQuizs, 
        subjectAssiments:req.body.subjectAssiments, 
        subjectBooks:req.body.subjectBooks, 
        subjectQuestionbanks:req.body.subjectQuestionbanks, 
        subjectProjects:req.body.subjectProjects, 
        subjectDoctor:req.body.subjectDoctor, 
    })
   try{
    const savedSubject=await newsubject.save();
    await LevelnumSchema.findByIdAndUpdate(levelId,{$push:{Subjects:savedSubject._id}});
    await doctor.findByIdAndUpdate(doctorId,{$push:{Subjects:savedSubject._id}});
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
        const singlesubject=await subject.findById(id).populate('subjectChapters subjectProjects subjectQuizs subjectDoctor')
         res.status(200).json({
                success:true,
                message:"succesfull",
                data:singlesubject
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

export const getSubjectsProject=async(req,res)=>{
    const id = req.body.id;
    try{
        const singlesubject=await project.findById(id).populate('projectTasks')
         res.status(200).json({
                success:true,
                message:"succesfully ",
                data:singlesubject
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