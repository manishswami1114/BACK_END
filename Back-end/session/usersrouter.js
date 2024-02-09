const express = require("express");
const session = require("express-session");
const path = require('path');
const routes = express.Router();
const app = express();
routes.get('/users',(req,res)=>{
    res.render('./views/dashboard',{name:req.session.name});
})
module.exports=routes;