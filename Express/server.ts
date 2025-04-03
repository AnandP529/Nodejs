import * as express from "express";

import transactions from "./transactions";
import accounts from "./accounts";

const app = express();

app.use(express.json());


app.use("/module1", transactions);
app.use("/module2", accounts);

app.listen(8080, () => {
    console.log("Server started on http://localhost:8080");
});
 // GET http://localhost:8080/module1
 //GET http://localhost:8080/module1/ak
 //GET http://localhost:8080/module2
 //Post http://localhost:8080/module2/ak
