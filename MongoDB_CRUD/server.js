"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//server.ts file used to collabrate the custom modules
//fetch insert update remove are the custom modules 
//server.ts file is the main server file
//node starts the execuetion from server.ts file
var express = require("express");
var cors = require("cors");
var bodyparser = require("body-parser");
var fetch_1 = require("./fetch/fetch");
var insert_1 = require("./insert/insert");
var update_1 = require("./update/update");
var remove_1 = require("./remove/remove");
var app = express();
app.use(cors()); //enabling the cors policy
//set MIME type
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
//use the modules
app.use("/fetch", fetch_1.default);
app.use("/insert", insert_1.default);
app.use("/update", update_1.default);
app.use("/remove", remove_1.default);
//asign the port no
app.listen(8080, function () {
    console.log("server started successfully !!!");
});
