import * as express from "express";
import * as mongodb from "mongodb";

let anand:any=mongodb.MongoClient;

let insert=express.Router().post("/",(req:any,res:any):any=>{
    anand.connect("mongodb+srv://Anand:Anand%403498@cluster0.izcxmsa.mongodb.net/Nodejs?retryWrites=true&w=majority",(err,connection)=>{

        if(err)throw err;
        else{
            let db =connection.db("Nodejs");
            db.collection("products").insertOne({
                id: req.body.id,
                name: req.body.name,
                qty: req.body.qty,
                price: req.body.price,
                category: req.body.category,
                image: req.body.image
            }, (err: any, result: any) => {
                if (err) throw err;
                else res.send({ message: "Record inserted successfully!" });
            });
            



        }

    });
});

export default insert;