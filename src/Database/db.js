import mongoose from "mongoose";

function connectDB() {
  mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err)=>{
    console.log("Error Occured",err)
  });
}

export default connectDB;
