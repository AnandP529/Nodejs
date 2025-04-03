"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongodb = require("mongodb");
var anand = mongodb.MongoClient;
var insert = express.Router().post("/", function (req, res) {
    anand.connect("mongodb+srv://Anand:Anand%403498@cluster0.izcxmsa.mongodb.net/Nodejs?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("Nodejs");
            db.collection("products").insertOne({
                id: req.body.id,
                name: req.body.name,
                qty: req.body.qty,
                price: req.body.price,
                category: req.body.category,
                image: req.body.image
            }, function (err, result) {
                if (err)
                    throw err;
                else
                    res.send({ message: "Record inserted successfully!" });
            });
        }
    });
});
exports.default = insert;
