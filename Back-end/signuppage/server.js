const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.static("."));
app.use(express.urlencoded());
app.post("/signup", (req, res) => {
    fs.readFile("./detail.txt", "utf-8", (err, data) => {
        let record = JSON.parse(data);
        let rest = record.filter((item) => {
            if (item.username == req.body.username) {
                return true;
            }
        });
        if (rest.length == 0) {

            let obj = {};
            obj.username = req.body.username;
            obj.password = req.body.password;

            record.push(obj)
            fs.writeFile("./detail.txt", JSON.stringify(record), function (err) {
                if (err) {
                    throw err;
                }
                else {
                    res.send("saved");
                }
            });
        }
        else {
            res.send("user already exist");
        }
    })
})
app.listen(3000, (err) => {
    if (err) {
        console.log("404");
    }
    else {
        console.log("server started");
    }
})