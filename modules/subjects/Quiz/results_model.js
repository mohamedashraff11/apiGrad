
import mongoose from "mongoose";


const resultsSchema =new mongoose.Schema(
    {
        studentId:{
            type:mongoose.Types.ObjectId,
            ref:"user"
        },
        result:{
            type:Number,
            require:true
        },

    },
    {timestamps:true}  
);

export default mongoose.model("result",resultsSchema);