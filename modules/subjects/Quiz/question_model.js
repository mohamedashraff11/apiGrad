
import mongoose from "mongoose";


const questionSchema =new mongoose.Schema(
    {
      question: {
        type: String,
        required: true
      },
      options: {
        type: Map,
        of: Boolean,
        required: true
      }
   
      
    },
    {timestamps:true}  
);

export default mongoose.model("question",questionSchema);