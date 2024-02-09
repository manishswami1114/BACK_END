const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.static("."));
app.use(express.urlencoded({ extended: false }));
app.post("/action", (req, res) => {
    console.log(req.body);
    if (req.body.username === "manish" && req.body.password === "1234") {
        //res.send("Thx for joining us");
        fs.readFile("./index.html", "utf-8", (err, data) => {
            res.send(data);
        })
    }
    else {
        fs.readFile("./login.html", "utf-8", (err, data) => {
            res.send(data);
        })

    }
})
app.get("./login.html", (req, res) => {
    res.send("Server started");
})
app.listen(3000, (err) => {
    console.log("Server started");
})