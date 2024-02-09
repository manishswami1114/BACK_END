const express = require("express");
const path = require("path");
// express give us a object and it have 1 default function 
const app = express();

app.use(express.static("."));
app.use(express.urlencoded({extended:false}));
app.post("/getdata",(req,res)=>{
    console.log(req.body.Username);
    res.send("welcome "+req.query.Username);
})
app.get("/",(req,res)=>{
    res.send("Server started")
})
// app.get("./index.html",(req,res)=>{
//     res.sendFile(path.join(__dirname,"./index.html"));
// })
// app.get("*",(req,res)=>{
//     res.status(404).sendFile(path.join(__dirname,"./404.html"));
// })

var server = app.listen(8081,(err)=>{
    if(err){
        console.log("not started");
    }
    else{
        console.log("server started");
    }
    /* The code `var host = server.address().address` retrieves the IP address of the server that is
    currently listening for incoming requests. The code `var port = server.address().port` retrieves
    the port number on which the server is listening. Finally, the code `console.log("Example app
    listening at http://%s:%s", host, port)` logs the URL at which the server is accessible, using
    the retrieved IP address and port number. */
    // var host = server.address().address
    //     var port = server.address().port
    //     console.log("Example app listening at http://%s:%s", host, port)
})