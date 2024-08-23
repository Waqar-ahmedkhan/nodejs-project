import mongoose, { model, Schema } from "mongoose";

const userMongoose = new mongoose.Schema({
    username: { type: "string", required: true },
    email: { type: "string", required: true},
    authentication: {
        password: { type: "string", required: true},
        salt: { type:"string", required: false}, 
        sessionToken: { type: "string", required:true },

    }


})

export const userModel = mongoose.model("User", userMongoose)

 export const getUsers = () => userModel.find();
 export const getUserMyEmail = ( email: string) => userModel.find({email});
 export const getUserById = (id: string) => userModel.findById(id);
 export const createUser = (user: any) => userModel.create(user);