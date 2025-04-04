"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyparser = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");
// Create the Express app
var app = express();
// Enable CORS
app.use(cors());
// Set JSON as MIME type
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
// Connect to MongoDB
mongoose.connect("mongodb+srv://Anand:Anand%403498@cluster0.izcxmsa.mongodb.net/Nodejs?retryWrites=true&w=majority")
    .then(function () { return console.log("MongoDB connected successfully"); })
    .catch(function (err) { return console.error("MongoDB connection error:", err); });
// Define the schema
var employeeSchema = new mongoose.Schema({
    e_id: Number,
    e_name: String,
    e_sal: Number
});
// Create the model (fixed the incorrect `Model` usage)
var Employee = mongoose.model("Employee", employeeSchema);
// Create the REST API
app.post("/employee", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var newRecord, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                newRecord = new Employee({
                    e_id: req.body.e_id,
                    e_name: req.body.e_name,
                    e_sal: req.body.e_sal
                });
                return [4 /*yield*/, newRecord.save()];
            case 1:
                _a.sent();
                res.status(200).json({ insert: "success" });
                return [3 /*break*/, 3];
            case 2:
                err_1 = _a.sent();
                console.error("Error inserting data:", err_1);
                res.status(500).json({ error: "Failed to insert data" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.get("/allemployees", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var employees, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Employee.find()];
            case 1:
                employees = _a.sent();
                res.status(200).json(employees);
                return [3 /*break*/, 3];
            case 2:
                err_2 = _a.sent();
                console.error("Error fetching employees:", err_2);
                res.status(500).json({ error: "Failed to fetch employees" });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// Assign the port number
app.listen(8080, function () {
    console.log("Server started successfully on port 8080");
});
