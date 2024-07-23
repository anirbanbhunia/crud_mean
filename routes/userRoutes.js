const express = require("express")
const {home,createUser,getUsers,deleteUser,updateUser} = require("../contoler/controler.js")

const router = express.Router()

router.get("/",home)
router.post("/createuser",createUser)
router.get("/getusers",getUsers)
router.delete("/deleteuser/:id",deleteUser)
router.put("/edituser/:id",updateUser)

module.exports = router