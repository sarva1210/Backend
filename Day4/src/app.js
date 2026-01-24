const express = require("express")
const app = express()

const notes =[]

app.use(express.json())

app.get("/", (req, res) => {
    res.send("hello world")
})

// post notes
app.post("/notes", (req, res) => {
    console.log(req.body)
    notes.push(req.body)
    console.log(notes)
    res.send("notes created")
})

// get notes
app.get("/notes",(req,res)=>{
    res.send(notes)
})

// dlt notes/:index
app.delete("/notes/:index", (req, res) => {
    delete notes[ req.params.index ]
    res.send("note deleted successfully")
})

// patch notes/:index
app.patch("/notes/:index", (req, res) => {
    notes[ req.params.index ].description = req.body.description
    res.send("Note updated successfully")
})

module.exports = app
