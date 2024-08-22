import express, { Request, request, Response } from "express";
import cors from  "cors"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import { mongodbConnet } from "./db/database"

 const app = express();


 mongodbConnet();



  app.use(cors( {
    credentials: true
  }));


  app.use(compression())
  app.use(bodyParser.json())
  app.use(cookieParser());


  app.get("/", (req: Request, res: Response)=> {
         console.log("hello world")
         
         res.send("hello world ")
  })

  app.listen(8080, ()=> {
    console.log("iam connenting to 8080 ")

  })