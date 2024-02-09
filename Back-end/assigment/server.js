const express = require("express");
const req = require("express/lib/request");
const app = express();
const fs = require("fs");
app.use(express.static("."))
app.get("/user/",(req,res)=>{
    fs.readFile("./home.html","utf-8",(err,data)=>{
        res.send(data);
    })
})
app.get("/user/login",(req,res)=>{
    fs.readFile("./index.html","utf-8",(err,data)=>{
        res.send(data);
    })
})
app.get("/user/index.html",(req,res)=>{
    fs.readFile("./index.html","utf-8",(err,data)=>{
        res.send(data);
    })
})
app.get("/user/signup",(req,res)=>{
    fs.readFile("./sinup.html",'utf-8',(err,data)=>{
        res.send(data);
    })
})
app.get("/user/sinup.html",(req,res)=>{
    fs.readFile("./sinup.html",'utf-8',(err,data)=>{
        res.send(data);
    })
})

app.listen(4000,(err)=>{
    console.log("server started");
})