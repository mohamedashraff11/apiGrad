import subject from '../../modules/subjects/Subjects.model.js'
import request from '../../modules/subjects/request_model.js'
import user from '../../modules/user_model.js'




export const createRequest=async(req,res)=>{
    const subjectId=req.body.subjectId
    const newRequest=new request({ })
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


export const checkStudent=async(req,res)=>{
     const studentId=req.body.studentId
    try{
         const student =await subject.findOne(studentId)
      
         if(!student){
            return res.status(404).json({success:false,message:"student not found",})
         }
    
    }
    catch(err){
        res.status(404).json({
            success:false,
            message:"faild",
        });
        throw(err);
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

