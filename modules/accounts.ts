//import express
import * as express from "express";

//create the module
let accounts:any=express.Router();
//create get request
accounts.get("/",(req:any,res:any):any=>{
    res.status(200).json({"message":"Welcome to accounts Module"});
});

accounts.get("/login",(req:any,res:any):any=>{

    if(req.query.uname==="admin"&& req.query.upwd==="admin"){
        res.status(200).json({"login":"Success"});

    }else{
        res.status(400).json({"login":"Fail"});
    }

});
//export the module
export default accounts;