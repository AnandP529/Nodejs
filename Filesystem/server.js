//import fs module
const fs = require("fs");
/*
//read data Assynchronously
fs.readFile("demo.txt",(err,res)=>{

    if(err)throw err;
    else{
        console.log(res.toString());
    }

});
*/
/*
// read the data Synchronously
const res =fs.readFileSync("demo.txt");
console.log(res.toString());
*/
/*
//WriteFiile it will remove the old data in demo.txt and changes to new data
fs.writeFile("demo.txt","Hello",(err)=>{
    if(err)throw err
    else{
        console.log("Write operation is success");
    }
});
*/
/*
//write the data in Synchronously
fs.writeFileSync("demo.txt","Welcome"); 
console.log("Data Written Successfully");
*/
/*
//append the data assyncronously
fs.appendFile("demo.txt","NodeJS",(err)=>{
    if(err)throw err;
    else{
        console.log("Data Append Successfully");
    }
});
*//*
//append the data syncronously
fs.appendFileSync("demo.txt","Hello");
console.log("Appended Data Synchronously");
*/ 
//How to open the file asynchronously
//r+ is known asreadable and writable
//fd is filedescriptive
fs.open("new2.txt","r+",(err,fd)=>{
    if(err)throw err;
    else{
        console.log("file opened successfully");
        //rename the file
        fs.rename("new2.txt","new1.txt",(err)=>{
            if(err)throw err;
            else{
                console.log("File renamed successfully");
                //read operation
                fs.readFile("new1.txt",(err,res)=>{
                    if(err)throw err;
                    else{
                        console.log(res.toString());
                        console.log("data read Successfully");
                        //write the data
                        fs.writeFile("new1.txt","this is File System",(err,result)=>{
                            if(err) throw err;
                            else{
                                console.log("Data write Successfull");
                                //truncate
                                fs.truncate("new1.txt",10,(err)=>{
                                    if(err) throw err;
                                    else{
                                        console.log("truncate operation success");
                                    }
                                    //close
                                    fs.close(fd,(err)=>{
                                        if(err)throw err;
                                        else{
                                            console.log("File closed Successfully");
                                            //delete the file
                                            fs.unlink("new1.txt",(err)=>{
                                                if(err) throw err;
                                                else{
                                                    console.log("File deleted succesfully");
                                                }
                                            });
                                        }
                                    });
                                });
                            }
                        });
                    }
                });
            }
        });
    }
}); 
