import mongoose from "mongoose";

export const mongodbConnet = (() => {
  const mongodball = mongoose.connect("mongodb://localhost:27017/mongoDb").then(()=> {
      console.log("connect to mongodb ")
   }).catch((err:any)=> {
      console.log(err);
})
    
 })