import express, {Request, Response } from 'express'
import {createUser, getUserByEmail} from "../model/user"


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

        const user = new createUser({
            username,
            email,
            authentication: {
                password,
                salt: ""
            }
        })

    } catch(e){
        console.log("error in registration")
    }
    
}

