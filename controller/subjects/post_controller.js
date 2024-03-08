import post from "../../modules/subjects/post_model.js"
import subject from '../../modules/subjects/Subjects_model.js'



export const createPost=async(req,res)=>{
    const subjectId=req.body.subjectId
    const newPost=new post({
        Doctor:req.body.Doctor, 
        desc:req.body.desc, 
    })
   try{
    const savedPost=await newPost.save();
    await subject.findByIdAndUpdate(subjectId,{$push:{subjectAssiments:savedPost._id}})
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


export const getPost=async(req,res)=>{
    const id = req.body.id;
    try{
        const data=await post.findById(id)

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