const express = require("express");
const app = express();
const path= require("path")
app.use(express.static("public"));
app.set("view engine","ejs");
app.get("/",(req,res)=>{
        res.render("home",{name:"manish swami",courses:["one","second","third"]})
    })

app.listen(3031,(err)=>{

        console.log("server started...");
})