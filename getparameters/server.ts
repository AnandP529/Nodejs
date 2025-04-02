import * as express from "express";
import * as path from "path"; // Import path module

let app: any = express();

// Authorization middleware
let auth = (req: any, res: any, next: any): any => {
    let allHeaders = req.headers;
    if (allHeaders.token === "anandIT") {
        next(); // Authorization success
    } else {
        res.status(500).json({ auth: "fail" }); // Authorization failure
    }
};

// GET request with authorization
app.get("/login", [auth], (req: any, res: any): any => {
    if (req.query.uname === "admin" && req.query.upwd === "admin") {
        res.status(201).json({ Login: "Success" });
    } else {
        res.status(400).json({ login: "Failed" });
    }
});

// Default request (fix sendFile error)
app.get("/", (req: any, res: any): any => {
    res.sendFile(path.join(__dirname, "index.html"));

});

// Start the server
app.listen(8080, () => {
    console.log("Server started successfully");
});
