import * as express from "express"

let cards:any=express.Router();

cards.post("/",(req:any,res:any):any=>{
    res.status(200).json({"message":"Welcome to Cards module"});

});
export default cards;
