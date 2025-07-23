const express = require('express')
const PORT = 3000
const app = express()

app.listen(PORT, (err) => {
    if(err) {
        console.log(`\x1b[31m${err.message}\x1b[0m`)
    } else {
        console.log(`api is running on port ${PORT}`)
    }
})