const http = require('http');
  const fs = require('fs/promises');
const server = http.createServer(async (req,res) => {
    const data = req.url;
    let filename = "";
    if(req.url=="/"){ 
        filename = "./index.html"
    }
    else if(req.url=="about.html"){
        filename = "./about.html";
    }
    else{  
        filename= data.substr(1)  
        res.end(await readfile(filename));
    }
});
server.listen(4000,(err)=>{
    if(err){
    console.log("server not started");
    }
    else{
        console.log("Server Started");
    }
})
async function readfile(filename)
{
    return await fs.readFile(filename,"utf-8");
}