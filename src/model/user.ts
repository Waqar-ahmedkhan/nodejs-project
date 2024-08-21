import mongoose, { model, Schema } from "mongoose";

const userMongoose = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,


})

 export const User =  mongoose.Model<any>("user", userMongoose)