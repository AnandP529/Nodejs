import * as express from "express";
import * as mongodb from "mongodb";

let anand:any=mongodb.MongoClient;

let update = express.Router().put("/",(req:any,res:any):any=>{
    anand.connect("mongodb+srv://Anand:Anand%403498@cluster0.izcxmsa.mongodb.net/Nodejs?retryWrites=true&w=majority",(err,connection)=>{
        if(err)throw err;
        else{
            let db=connection.db("Nodejs");
            db.collection("products").updateOne(
                {"id":req.body.id},
                {$set:{price:req.body.price,qty:req.body.qty}},(err:any,result:any)=>{
                    if(err)throw err;
                    else{
                        res.send({message:"record updated successfully !!!"})
                    }
                });
        }
    });
});

export default update;