const fs=require('fs');
fs.writeFile("std.txt","Name: Tanmay",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("File created");
    }
})
fs.appendFile("std.txt","\nutf8",(err)=>{
    if(err) {
        console.log("unsuccessful",err);
    }
    else {
        console.log("successful");
    }
})
fs.readFile("std.txt",(err)=>{
    if(err) {
        console.log(`Unsuccessful ${err}`);
    }
    else {
        console.log(`File has been read ${err}`);
    }
})