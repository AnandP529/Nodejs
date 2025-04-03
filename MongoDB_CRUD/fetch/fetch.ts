//import express

import * as express from "express";

import * as mongodb from "mongodb";

let anand = mongodb.MongoClient;
let fetch :any = express.Router().get("/", async (req: any, res: any) => {
    try {
        let connection = await anand.connect("mongodb+srv://Anand:your-password@cluster0.izcxmsa.mongodb.net/Nodejs?retryWrites=true&w=majority");

        let db = connection.db("Nodejs");
        let data = await db.collection("products").find({}).toArray(); // Fetch all documents

        res.send(data);
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        res.status(500).send("Failed to fetch data");
    }
});


export default fetch;