import * as express from "express";

const transactions = express.Router();


transactions.get("/", (req, res) => {
    res.status(200).json({ message: "Transaction soon....!" });
});

transactions.get("/ak", (req , res) => {
    res.status(200).json({ message: "Welcome Anand For Node JS" });
});

export default transactions;
