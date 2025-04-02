//import express module
import * as express from "express";
//import body-parser module
import * as bodyparser from "body-parser";

//create the rest object
let app:any=express();
//this rest object is used to develope the rest services

//MIME type is used for communication b/w Client and server
app.use(bodyparser.json());

//receive form data from client and parse it (extended means uname,upwd...) 
//urlencoded means form data coming from form
app.use(bodyparser.urlencoded({extended:false}));

//authorization
let auth:any = (req:any,res:any,next:any):any=>{

    //Authorization code presents into Headers
    let allHeaders=req.headers;
    let token:any = allHeaders.token;

    if(token=="nodejs"){
        next();
    }else{
        res.status(401).json({auth:"fail"});
    }
};
//create Post request 
app.post("/login",[auth],(req:any,res:any):any=>{
    if(req.body.uname === "admin" && req.body.upwd==="admin"){
        res.status(200).json({login:"Success"});
    }
    else{
        res.status(401).json({login:"Fail"});
    }
});

app.listen(process.env.PORT,()=>{
    console.log("server started successfully");
});