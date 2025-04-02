"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyparser = require("body-parser");
var dotenv = require("dotenv");
// Load environment variables from .env file
dotenv.config();
// Create the app
var app = express();
// Middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
// Authorization Middleware
var auth = function (req, res, next) {
    var token = req.headers.token;
    if (token === "nodejs") {
        next();
    }
    else {
        res.status(401).json({ auth: "fail" });
    }
};
// POST request for login
app.post("/login", [auth], function (req, res) {
    if (req.body.uname === "admin" && req.body.upwd === "admin") {
        res.status(200).json({ login: "Success" });
    }
    else {
        res.status(401).json({ login: "Fail" });
    }
});
// ✅ Use a default port if process.env.PORT is not set
var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
    console.log("Server started successfully on port ".concat(PORT));
});
