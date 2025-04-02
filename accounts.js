"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var accounts = express.Router();
console.log("Accounts module loaded"); // ✅ Debug log
accounts.get("/", function (req, res) {
    res.status(200).json({ message: "Welcome to Accounts Module" });
});
accounts.post("/ak", function (req, res) {
    res.status(200).json({ message: "Account will add soons" });
});
exports.default = accounts;
