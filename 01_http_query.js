//import http
let http = require("http");

//import url module
let url = require("url"); // Import the url module

//url module is used to read the query parameters
//it is also a pre defined module and it is available with nodejs software

let server=http.createServer((req,res)=>{
    //MIME Type[HTML]
    //communication language b/w client and server is known as MIME type
    //writeHead is used to set the MIME type
    res.writeHead(200,{'content-Type':'text/html'}); 
    //url module is used to read the query parameters
    //it consists one function parse() is used to read
    //if we wnat to read the url we need to pass boolean value true
    //After passing we need to call query parameter& it will return one object
    let obj=url.parse(req.url,true).query;

    if(obj.uname==="anand" && obj.upwd==="anand"){
        res.write("<h1>Login Success</h1>")
    }else{
        res.write("<h2>Login fail</h2>")
    }
    res.end();
});

server.listen(8080);
console.log("server listening the port no.8080");