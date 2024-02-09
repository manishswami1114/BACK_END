const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url == "/" || req.url == "/index.html") {
        fs.readFile("index.html", "utf-8", (err, data) => {
            res.end(data);
        })
    }
    else if (req.url == "/contact.html") {
        fs.readFile("contact.html", "utf-8", (err, data) => {
            res.end(data);
        })
    }
    else if (req.url == "/style.css") {
        fs.readFile("style.css", "utf-8", (err, data) => {
            res.end(data);
        })
    }
    else if (req.url == "/about.html") {
        fs.readFile("about.html", "utf-8", (err, data) => {
            res.write(data);//not effect the code or server 
            res.end();
        })
    }
    else if (req.url == "/alert.js") {
        fs.readFile("alert.js", "utf-8", (err, data) => {
            res.end(data);
        })    
    }
    else if (req.url == "./about.js") {
        fs.readFile("about.js", "utf-8", (err, data) => {
            res.end(data);
        })
    }
    else{
        res.end("Page not found");
    }

});
server.listen(3000, (err) => {
    if (err) {
        console.log("unable to found server");
    }
    else {
        console.log("server started");
    }
});
