"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import express module
var express = require("express");
var app = express();
app.get("/anand", function (req, res) {
    res.status(200).json({ "message": "Welcome to Type Script With Node JS" });
});
//assign the port
app.listen(8080, function () {
    console.log("server started Successfully...!!!");
});
