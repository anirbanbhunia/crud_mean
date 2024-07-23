const mongoose = require("mongoose")

const user_schema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        trim:true,
        maxLength:[20,"Name must be less than 20 character"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique: true
    }
})

module.exports = mongoose.model("user",user_schema)