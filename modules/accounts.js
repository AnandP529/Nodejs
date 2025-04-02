"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import express
var express = require("express");
//create the module
var accounts = express.Router();
//create get request
accounts.get("/", function (req, res) {
    res.status(200).json({ "message": "Welcome to accounts Module" });
});
accounts.get("/login", function (req, res) {
    if (req.query.uname === "admin" && req.query.upwd === "admin") {
        res.status(200).json({ "login": "Success" });
    }
    else {
        res.status(400).json({ "login": "Fail" });
    }
});
//export the module
exports.default = accounts;
