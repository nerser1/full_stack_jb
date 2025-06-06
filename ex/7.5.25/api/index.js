const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const config = require('./config')
console.log(config)

const app = express()
app.use(cors())
app.use(bodyParser.json({ extend: true}))
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.path} `)
    next()
})

app.get("/api/health-check", (req, res, next) => {
    console.log(req.query)
    res.send('Server is up and running')
})

app.get("/api/authenticate",(req, res, next) => {
    const token = req?.query?.token
    if(token === "t1234"){
        return res.send('User Authorized')
    }else{
        return res.status(401).send('Sorry User is not Authorized')
    }
})

const users = []
app.post("/auth/register", (req, res, next) => {
    const userName = req.body.userName
    const password = req.body.password
    if(userName && password){
        users.push({userName, password})
        return res.send("User registered successfully")
    }else{
        return res.status(400).send("Missing userName or password")
    }
})

app.get("/auth/login", (req, res, next) => {
    const userName = req.query.userName
    const password = req.query.password
    if(userName && password){
        const foundUser = users.find(u => u.userName === userName && u.password === password)
        if (foundUser){
            return res.send("User logged in successfully")
        }else{
            return res.send("Wrong Username or Password")
        }
    }else{
        return res.status(400).send("Missing userName or password")
    }
})

app.get("/users", (req, res, next) => {
    res.json(users)
})

app.listen(config.port, (e) => {
    if(e) {
        console.log(e)
    }else{
        console.log(`listening to PORT: ${config.port}`)
    }
})