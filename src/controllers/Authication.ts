import express, {Request, Response } from 'express'


type registrationType {
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

    } catch(e){
        console.log("error in registration")
    }
    
}

