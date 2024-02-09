const express=require("express");
const fs=require("fs");
const app=express();
const path = require('path');
const cookieparser = require("cookie-parser");
const session = require('express-session');
const { render } = require("ejs");
const client = require("mongodb").MongoClient;
client.connect('')
let onday = 24*60*60*1000;
app.use(cookieparser());
app.use(session({
    saveUninitialized:true,
    resave:false,
    secret:'asvdnde#@vgddg$%bbfdd#SSE3',
    cookie:{
        maxAge:onday
    }

}));
app.use(express.static("."));
app.use(express.urlencoded());
const adminroutes= require("./adminroute")
app.use('/admins',test,adminroutes);
const userroutes= require("./usersrouter")
app.use('/user',testuser,userroutes);
function test(req,res,next){
    if(req.session.username && req.session.role == 'admin'){
        next();
    }
    else{
        res.redirect('/');
    }
}
function testuser(req,res,next){
    if(req.session.username){
        next();
    }
    else{
        res.redirect('/');
    }
}
app.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/login');
})
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})
app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.get('/dashboard',(req,res)=>{
    if(req.session.username)
    res.sendFile(path.join(__dirname,"./home.html"))
else{
    res.redirect("/login");
}
})
app.get('/login',(req,res)=>{
    res.render('./views/index.ejs',{message:""})
})

// app.post("/login",(req,res)=>{

//    console.log(req.body);
//    fs.readFile("./pass.txt","utf-8",(err,data)=>{

//     let records=JSON.parse(data);

//    let results= records.filter((item)=>{
//     if(item.username==req.body.username && item.password==req.body.password)
//     return true;

//     });

//     if(results.length==0){
//     res.render('./views/index.ejs',{message:"invalid users/pass"});
// }
// else{
// req.session.username= req.body.username;
// req.session.role = results[0].role;
// req.session.name= results[0].name;
// res.redirect('dashboard')
// }


//    })

// })
app.listen(4000,(err)=>{

    if(err)
    console.log("Unable to start server...");
else
console.log("Server Started...")
})