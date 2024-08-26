import { Request, Response } from "express"
import { userModel } from "../model/user"


export const getUserById = async (req:Request, res:Response) => {
    try {
        const userId = req.query.id;
        if (!userId) {
            return res.status(400).json({ message: "User ID is required" });
        }

        const user = await userModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}