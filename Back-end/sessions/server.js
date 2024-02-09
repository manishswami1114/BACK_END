const express= require("express");
const fs = require("fs");
const  session = require("express-session");
const cookieParser = require("cookie-parser");
const app = express();
app.use(express.static("."));
app.use(cookieParser);
app.use(session[{
    resa
}])