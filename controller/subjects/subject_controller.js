import subject from "../../modules/subjects/Subjects_model.js"
import LevelnumSchema from '../../modules/levelnum_models.js'
import project from "../../modules/subjects/project/project_model.js"
import doctor from '../../modules/doctor_model.js'
import assiment from '../../modules/subjects/assiment_model.js'

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
        const singlesubject=await subject.findById(id).populate('subjectChapters subjectProjects subjectQuizs subjectDoctor subjectRequests subjectAssiments')
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

export const  getAllAssignmentsBySubjectId=async(req, res)=> {
    try {
        const subjectId= req.body.subjectId;

        // Validate if subjectId is provided
        if (!subjectId) {
            return res.status(400).json({ error: "Subject ID is required" });
        }

        // Find the subject by its ID
        const Subject = await subject.findById(subjectId).exec();

        // Check if the subject exists
        if (!Subject) {
            return res.status(404).json({ error: "Subject not found" });
        }

        // Retrieve all assignments associated with the subject
        const assignments = await assiment.find({ _id: { $in: subject.subjectAssiments } }).exec();

        return res.status(200).json({ assignments });
    } catch (error) {
        // Handle errors
        console.error("Error fetching assignments:", error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
}
