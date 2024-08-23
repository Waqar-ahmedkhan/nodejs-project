import mongoose, { model, Schema } from "mongoose";

// Define the User Schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    authentication: {
        password: { type: String, required: true },
        salt: { type: String, required: false }, 
        sessionToken: { type: String, required: true },
    }
});

// Create the User Model
export const userModel = mongoose.model("User", userSchema);

// CRUD Operations and Utility Functions

// Get all users
export const getUsers = () => userModel.find();

// Get user by email
export const getUserByEmail = (email: string) => userModel.findOne({ email });

// Delete user by ID
export const deleteUser = (id: string) => userModel.findByIdAndDelete(id);

// Get user by ID
export const getUserById = (id: string) => userModel.findById(id);

// Create a new user
export const createUser = (user: any) => userModel.create(user);

// Update user by ID
export const updateUser = (id: string, user: any) => 
    userModel.findByIdAndUpdate(id, user, { new: true });

// Update user password and salt
export const updateUserPassword = (id: string, password: string, salt: string) => 
    userModel.findByIdAndUpdate(id, { 
        $set: { 
            "authentication.password": password, 
            "authentication.salt": salt 
        } 
    }, { new: true });

// Update user session token
export const updateUserSessionToken = (id: string, sessionToken: string) => 
    userModel.findByIdAndUpdate(id, { 
        $set: { "authentication.sessionToken": sessionToken } 
    }, { new: true });

// Get user by session token
export const getUserBySessionToken = (sessionToken: string) => 
    userModel.findOne({ "authentication.sessionToken": sessionToken });

// Other utility functions

// Check if a user exists by email
export const userExists = async (email: string) => {
    const user = await getUserByEmail(email);
    return !!user;
};

// Find users by username
export const getUsersByUsername = (username: string) => 
    userModel.find({ username: new RegExp(username, 'i') }); // case-insensitive search

// Count total users
export const countUsers = () => userModel.countDocuments();
