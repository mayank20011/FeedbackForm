import {mongoose,Schema} from "mongoose";

const feedBackSchema = new Schema({
  name:{
    type:String,
    trim:true,
    required:[ true, "Add Name"],
  },
  phoneNumber:{
    type:String,
    trim:true,
    required:[true, "Add Number"],
  },
  rating:{
    type:String,
    trim:true,
    required:[true, "Add Ratting"],
    default:""
  },
  comment:
  {
    trim:true,
    type:String,
  }
});

export default mongoose.model("Feedback",feedBackSchema);
