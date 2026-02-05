const mongoose = require('mongoose')
function connectToDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connected to DB")
    })
    mongoose.connection.on("connected", () => {
        console.log("Connected DB:", mongoose.connection.name)
    })

}

module.exports = connectToDb