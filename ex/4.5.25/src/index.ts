const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json({ extended: true }))


app.get('/add/:num1/:num2', (req, res) => {
    res.send(`the result is: ${parseInt(req.params.num1) + parseInt(req.params.num2)}`)
})