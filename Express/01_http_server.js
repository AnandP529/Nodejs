//http server
//How to develope http server with nodejs
//"http" is the predefined module in nodejs used to create the http server[Not neccessary to download the module]
//http module is already availabe with node software

//import module(http module)
//require()is used to import the modules.

let http = require("http");
//create server
let server=http.createServer((req,res)=>{
    //reply to client[write()]
    res.write("welcome to http server");
    res.end(); // it is used to lock the response obj after sucessful send
});

//how to assign port no to server
server.listen(8080);
console.log("server listening the port no.8080");

//how to start the server
//node filename