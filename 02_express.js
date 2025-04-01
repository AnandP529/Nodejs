let express = require("express");

//create the rest object 
let app = express();

//get request
app.get("/",(req,res)=>{
    res.status(200).json({"message":"default get request"});
});

app.get("/demo",(req,res)=>{
    res.status(200).json({"message":"data from mongodb data soon...!"});
});

//post

app.post("/",(req,res)=>{
    res.status(200).json({"message":"default post request"});
});

app.post("/demo",(req,res)=>{
    res.status(200).json({"message":"data from Casandra Db soon"})
});

app.listen(8080,(req,res)=>{
    console.log("server started");
});

//http://localhost:8080/ (GET) (POST)
//http://localhost:8080/demo  (GET) (POST)