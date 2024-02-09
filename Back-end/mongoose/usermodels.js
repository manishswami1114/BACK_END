const { default: mongoose } = require("mongoose");
const monoggse = require("mongoose");
const userSchema = monoggse.Schema({
    "username":String,
    "password":String,
    "role":String

})
module.exports=mongoose.model("user",)