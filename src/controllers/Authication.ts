import express, {Request, Response } from 'express'
import {createUser, getUserByEmail} from "../model/user"
import { authication, random } from '../helpers/helper'


type registrationType =  {
    username: string,
    email: string,
    password:string
}
export const registor = async ( req:Request, res:Response)=> {
    try {
        const {username, email, password}:registrationType  = req.body;
        if(!username || !email || !password){
          return  res.status(400).json({
                status:404,
                message: "not found"
            })

        }

        const existingEmail = await getUserByEmail(email)

        if(existingEmail){
            res.status(400).json({
                message: "email  found" })

        }

        const salt = random();

        const user = await createUser({
            username,
            email,
            authentication: {
                salt,
                password: authication(salt, password),
            }
        })

    return   res.status(200).json({
            user_created: user,  
            message: "created successfully",
            status: 200,

        })

    } catch(e){
        console.log("error in registration")
    }
    
}

