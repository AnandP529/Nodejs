"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var accounts_1 = require("./accounts");
var transactions_1 = require("./transactions");
var cards_1 = require("./cards");
var app = express();
app.use("/accounts", accounts_1.default);
app.use("/transactions", transactions_1.default);
app.use("/cards", cards_1.default);
app.listen(8080, function () {
    console.log("Server started ");
});
//http://localhost:8080/accounts
////http://localhost:8080/accounts/login
//http://localhost:8080/transactions 
//http://localhost:8080/transactions token& wish authorizations
//http://localhost:8080/cards
