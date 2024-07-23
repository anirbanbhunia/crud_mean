
const User = require("../models/userModel.js")

exports.home = ((req,res) => {
    res.send('hello world')
})

//extract info from the frontend
exports.createUser = async(req,res) =>{
    try{
        //extract info from the frontend
        const{name,email} = req.body 

        if(!name || !email){
            throw new Error("Name and email are required")
        }
        const userAlreadyExist = User.findOne({email:email})

        if(userAlreadyExist){
            throw new Error("User already exist")
        }

        //now send the data to database
        const user = await User.create({
            name: name,
            email:email
        })
        res.status(201).json({
            success:true,
            message:"User created successfully",
            user
        })
    }catch(err){
        console.log(err)
        res.status(400).json({
            success:false,
            message: "User created unsuccessfully"
        })
    }
}

//extract all user from db
exports.getUsers = async(req,res) => {
    try{
        const users = await User.find({})
        res.status(200).json({
            success:true,
            users
        })
    }catch(err){
        console.log("Error is", err);
        res.status(400).json({
            success:false,
            message: err.message
        })
    }
}

//delete data from database
exports.deleteUser = async (req,res) => {
    try{
        const userId = req.params.id
        const user = await User.findByIdAndDelete(userId)
        res.status(200).json({
            success:true,
            message:"user deleted successfully"
        })
    }catch(err){
        res.status(400).json({
            success:false,
            message:err.message
        })
    }
}
//update data from database
exports.updateUser = async(req,res) =>{
    try{
        const userUpdate = await User.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).json({
            success: true,
            message:"user upadate successfully"
        })
    }catch(err){
        res.status(200).json({
            success:false,
            message:err.message
        })
    }
}