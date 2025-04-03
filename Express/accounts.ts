import * as express from "express";

const accounts = express.Router();

accounts.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to Accounts Module" });
});

accounts.post("/ak", (req, res) => {
    res.status(200).json({ message: "Account will add soons" });
});

export default accounts;
