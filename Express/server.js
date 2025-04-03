"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var transactions_1 = require("./transactions");
var accounts_1 = require("./accounts");
var app = express();
app.use(express.json());
app.use("/module1", transactions_1.default);
app.use("/module2", accounts_1.default);
app.listen(8080, function () {
    console.log("Server started on http://localhost:8080");
});
// GET http://localhost:8080/module1
//GET http://localhost:8080/module1/ak
//GET http://localhost:8080/module2
//Post http://localhost:8080/module2/ak
