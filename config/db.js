const mongoose = require("mongoose")

const connect_db = async () =>{
    mongoose.connect(process.env.mongo_url)
    .then((cnn) =>{
        console.log(`connection to DB: ${cnn.connection.host}`)
    })
    .catch((err)=>{
        console.log("error is: ", err.message);
        process.exit(1)
    })
}

module.exports = connect_db