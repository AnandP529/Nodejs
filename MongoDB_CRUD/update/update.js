"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongodb = require("mongodb");
var anand = mongodb.MongoClient;
var update = express.Router().put("/", function (req, res) {
    anand.connect("mongodb+srv://Anand:Anand%403498@cluster0.izcxmsa.mongodb.net/Nodejs?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("Nodejs");
            db.collection("products").updateOne({ "id": req.body.id }, { $set: { price: req.body.price, qty: req.body.qty } }, function (err, result) {
                if (err)
                    throw err;
                else {
                    res.send({ message: "record updated successfully !!!" });
                }
            });
        }
    });
});
exports.default = update;
