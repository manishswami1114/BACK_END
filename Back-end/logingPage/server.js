const express=require("express");
const fs=require("fs");
const app=express();
app.use(express.static("."));
app.use(express.urlencoded());
const cookieparser = require("cookie-parser"); 
const session = require("express-session");
const { redirect } = require("server/reply");
const oneday = 1000*60*60*24;
app.use(cookieparser());
app.use(session({
    saveUninitialized:true,
    resave:false,
    secret:'manish',
    cookie:{maxAge:oneday}
}))
app.use("/login",auth);
function auth(req,res,next){
    if(req.session.username){
        next();
    }
    else{
        redirect("/");
    }
}

app.post("/login",(req,res)=>{

   console.log(req.body);
   fs.readFile("./pass.txt","utf-8",(err,data)=>{

    let records=JSON.parse(data);

   let results= records.filter((item)=>{
    if(item.username==req.body.username && item.password==req.body.password)
    return true;

    });

    if(results.length==0){
        let obj = {};
            obj.username = req.body.username;
            obj.password = req.body.password;

            record.push(obj)
    }
else
fs.readFile("./home.html","utf-8",(err,data)=>{
    res.send(data);
})

req.session.username=req.body.username;
res.render("home",{name:req.session.username});
   })

})
app.listen(4000,(err)=>{

    if(err)
    console.log("Unable to start server...");
else
console.log("Server Started...")
})