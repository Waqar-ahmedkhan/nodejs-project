import mongoose, { model, Schema } from "mongoose";

const userMongoose = new mongoose.Schema({
    username: { type: "string", required: true },
    password: { type: "string", required: true},
    email: { type: "string", required: true, unique: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }

})