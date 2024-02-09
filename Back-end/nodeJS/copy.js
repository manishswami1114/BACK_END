const { error } = require("console");
const fs = require("fs");
function Search(path){
  fs.readdir(path,(error))
  if(!error){
    fs.readFile(path);
    Search(path+'/')
  }
}
Search('./');