import doctor from '../modules/doctor_model.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'


export const register=async(req,res)=>{

    try{
         const salt= bcrypt.genSaltSync(10);
         const hash=bcrypt.hashSync(req.body.password,salt)
        const newUser=new doctor({
            username:req.body.username,
            email:req.body.email,
            password:hash,
        });
        await newUser.save();
        res.status(200).json({
            success:true,
            message:"succesfully",
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

export const login=async(req,res)=>{
     const email=req.body.email
    try{
         const User =await doctor.findOne({email})
      
         if(!User){
            return res.status(404).json({success:false,message:"user not found",})
         }

         const checkcorrectpassword=await bcrypt.compare(req.body.password,User.password);
         if(!checkcorrectpassword){
            return res.status(404).json({success:false,message:"incorrect password or email",})   
         }
     

         const token =jwt.sign(
            {id:User._id,isAdmin: User.isAdmin},
            'mohamed',
            {expiresIn:'15d'}
         );
             const { password, ...info } = User._doc;
             res.status(200).json({ ...info, token });
    }
    catch(err){
        throw(err);
        res.status(404).json({
            success:false,
            message:"faild",
        });
    }

}

export const getuserData=async(req,res)=>{
    const id = req.body.id;
    try{
        const User=await doctor.findById(id)
        res.status(200).json({
            success:true,
            message:"succesfully ",
            data:User
        });
    }
    catch(err){
        throw(err);
        res.status(400).json({
            success:false,
            message:"faild ",
        });
    }
}
