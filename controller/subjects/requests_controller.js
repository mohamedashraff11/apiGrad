import subject from '../../modules/subjects/Subjects_model.js'
import request from '../../modules/subjects/request_model.js'
import user from '../../modules/user_model.js'




export const createRequest=async(req,res)=>{
    const subjectId=req.body.subjectId
    const newRequest=new request({
        students:req.body.studentId,
     })
   try{
    const savedRequest=await newRequest.save();
    await subject.findByIdAndUpdate(subjectId,{$push:{subjectRequests:savedRequest._id}})
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
        const data = await subject.findById(id)
    .populate({
        path: "subjectRequests",
        populate: {
            path: "students",
            select: "username email level"
        }
    });
        if(data){
            res.status(200).json({
                success:true,
                message:"succesfully ",
                data:data.subjectRequests
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

export const addStudentToSubject = async (req, res) => {
    const subjectId = req.body.subjectId;
    const studentId = req.body.studentId;

    try {
        // Find the subject by ID and push the student ID into the subjectStudents array
        await subject.findByIdAndUpdate(subjectId, { $push: { subjectStudents: studentId } });
        res.status(200).json({ success: true, message: "Student added to subject successfully." });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Failed to add student to subject.", error: err.message });
    }
}


export const createUserRequest=async(req,res)=>{
    const requestId=req.body.subjectId
    const studentId=req.body.subjectId
   try{
    await request.findByIdAndUpdate(requestId,{$push:{students:studentId}})
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




export const checkStudent = async (req, res) => {
    const studentId = req.body.studentId;

    try {
        const Subject = await subject.findOne({ subjectStudents: studentId });

        if (!Subject) {
            return res.status(404).json({
                success: false,
                message: "Student not found in any subject."
            });
        }

        res.status(200).json({
            success: true,
            message: "Student found in a subject.",
            Subject: Subject
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to check student.",
            error: err.message
        });
    }
}


export const getSubjectRequests=async(req,res)=>{
    const id = req.body.id;
    try{
        const data=await subject.findById(id).populate("subjectRequests","students","email username")

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

