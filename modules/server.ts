import * as express from "express";
import accounts from "./accounts";
import transactions from "./transactions";
import cards from "./cards";

let app:any=express();

app.use("/accounts",accounts);
app.use("/transactions",transactions);
app.use("/cards",cards);

app.listen(8080,()=>{
    console.log("Server started ");
});

//http://localhost:8080/accounts
////http://localhost:8080/accounts/login
//http://localhost:8080/transactions token& wish authorizations
//Has to send 2 headers at a time
//http://localhost:8080/cards