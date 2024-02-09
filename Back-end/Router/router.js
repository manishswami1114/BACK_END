const express = require("express");
const fs = require("fs");
const app = express();
app.post("/alltask",(req,res)=>{
    let records = req.body.todo;
})

app.listen(3000,(err)=>{
    console.log("started ");
})
