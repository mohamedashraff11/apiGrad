import express from "express";
import dotenv from "dotenv";
import mongoose, { set } from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth_router.js"
import levelsRoute from "./routes/levels_router.js"
import levelRoute from "./routes/level_router.js"
import subjectRoute from "./routes/subject/subject_router.js"
import chapterRoute from "./routes/subject/chapter_router.js"
import assimentRoute from "./routes/subject/assiment_router.js"
import projectRoute from "./routes/subject/project_router.js"
import questionRoute from "./routes/subject/Quiz/question_router.js"
import QuizRoute from "./routes/subject/Quiz/Quiz_router.js"
import PostRoute from "./routes/subject/post_router.js"
import doctorRoute from "./routes/doctor_router.js"


dotenv.config();
const app =express();  


const port =8000;
const corsOptions={
    origin:true,
    Credential:true
}


app.get('/',(req,res)=>{
    res.send('api is working')
})

mongoose.set("strictQuery",false);
const connect =async ()=>{
   try {
   await mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
   })        
      console.log("Mongodb connected !!")
    
    }catch(err){
        throw(err);
        console.log("Mongodb connection  failed !!")
    }
}


app.use('/uploaded/images',express.static('uploaded/images/'))
app.use(express.json())
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/auth',authRoute);
app.use('/levels',levelsRoute);
app.use('/level',levelRoute);
app.use('/subject',subjectRoute);
app.use('/chapter',chapterRoute);
app.use('/assiment',assimentRoute);
app.use('/project',projectRoute);
app.use('/question',questionRoute);
app.use('/Quiz',QuizRoute);
app.use('/Post',PostRoute);
app.use('/doctor',doctorRoute);



app.listen(port,()=>{
    connect();
    console.log("server listening on port",port)
})

