require('dotenv').config()
const express = require("express")
const cors = require("cors")

const connect_to_db = require("./config/db.js")

const app = express()
//express middleware
app.use(express.json())//this allow json data
app.use(express.urlencoded({extended:true}))//when we sent data by get request every data go through url, so url automaticly encode that data but in servar we need the original data for this we need to decode that data by using this
app.use(cors())
//connection to db
connect_to_db()

const userRoutes = require("./routes/userRoutes.js")

app.use('/',userRoutes)

module.exports = app