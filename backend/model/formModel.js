const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Enter Your Name"],
    },
    email:{
        type:String,
        required:[true, "Please Enter Your Email"],
    }, 
    number:{
        type:String,
        required:[true, "Please Enter Your Number"],
    },
    message:{
        type:String,
        required:[true, "Please Enter the Message"],
    },
    createAt:{
        type:Date,
        default:Date.now()
    },
});

module.exports = mongoose.model("Form", formSchema);