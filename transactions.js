"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transactions = express.Router();
transactions.get("/", function (req, res) {
    res.status(200).json({ message: "Transaction soon....!" });
});
transactions.get("/ak", function (req, res) {
    res.status(200).json({ message: "Welcome Anand For Node JS" });
});
exports.default = transactions;
