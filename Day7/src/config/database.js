const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect(process.env.DB_URI)
    .then(()=>{
        console.log("connected to Db")
    })
    .catch((err) => {
        console.error("DB connection failed:", err.message)
    })
}

module.exports = connectToDb