const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.static("./ppublic"));
app.get("/product/",(req,res)=>{
    fs.readFile("./ppublic/productlist.txt")
})
app.listen(3000,(err)=>{
    console.log("server started");
})