require("dotenv").config()

const mongoose = require("mongoose")

const app = require("./src/app")

mongoose.connect(process.env.DB_URI)

  .then(() => {
    console.log("Connected to Database")

    app.listen(3000, () => {
      console.log("Server is running on port 3000")
    })

  })
  
  .catch((err) => {
    console.error("DB connection failed:", err)
  })
