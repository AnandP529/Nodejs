import * as express from "express";
import * as mongodb from "mongodb";
let anand:any=mongodb.MongoClient;

let remove:any= express.Router().delete("/",(req:any,res:any):any=>{
    anand.connect("mongodb+srv://Anand:your-password@cluster0.izcxmsa.mongodb.net/Nodejs?retryWrites=true&w=majority",(err,connection)=>{

       if(err) throw err;
       else{
        let db=connection.db("Nodejs");
        let data = db.collection("products").deleteOne({"id":req.body.id},(err,res)=>{
            if(err)throw err;
            else{
                res.status(200).json({message:"record deleted successfully !!!"});
            }        
        });

       } 

    });
});

export default remove;