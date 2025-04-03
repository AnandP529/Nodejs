"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongodb = require("mongodb");
var anand = mongodb.MongoClient;
var remove = express.Router().delete("/", function (req, res) {
    anand.connect("mongodb+srv://Anand:Anand%403498@cluster0.izcxmsa.mongodb.net/Nodejs?retryWrites=true&w=majority", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("Nodejs");
            db.collection("products").deleteOne({ "id": req.body.id }, function (err, result) {
                if (err)
                    throw err;
                else
                    res.status(200).json({ message: "Record deleted successfully!" });
            });
        }
    });
});
exports.default = remove;
