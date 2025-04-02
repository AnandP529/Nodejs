"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path"); // Import path module
var app = express();
// Authorization middleware
var auth = function (req, res, next) {
    var allHeaders = req.headers;
    if (allHeaders.token === "anandIT") {
        next(); // Authorization success
    }
    else {
        res.status(500).json({ auth: "fail" }); // Authorization failure
    }
};
// GET request with authorization
app.get("/login", [auth], function (req, res) {
    if (req.query.uname === "admin" && req.query.upwd === "admin") {
        res.status(201).json({ Login: "Success" });
    }
    else {
        res.status(400).json({ login: "Failed" });
    }
});
// Default request (fix sendFile error)
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
// Start the server
app.listen(8080, function () {
    console.log("Server started successfully");
});
