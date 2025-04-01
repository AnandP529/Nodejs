//import express module
 import * as express from "express";

 let app:any=express();

 app.get("/anand",(req:any,res:any):any=>{
    res.status(200).json({"message":"Welcome to Type Script With Node JS"});
 });

 //assign the port
 app.listen(8080,()=>{
    console.log("server started Successfully...!!!");
 });