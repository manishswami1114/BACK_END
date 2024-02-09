const { render } = require("ejs");
const express = require("express");
const session = require("express-session");
const routes = express.Router();
const app = express();
routes.get('/admin',(req,res)=>{
    res.render('./views/dashboard',{name:req.session.name});
})
module.exports=routes;