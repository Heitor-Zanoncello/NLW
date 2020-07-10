const express = require("express")
const server = express()

server.use(express.static("public"))

server.listen(3000)

server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

server.get("/create-point.html", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html")
})

server.get("/search-results.html", (req, res) => {
    res.sendFile(__dirname + "/views/search-results.html")
})