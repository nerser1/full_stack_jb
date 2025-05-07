"use strict";
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.get('/', (req, res) => {
    return res.status(404).json([{ userName: "Talya@gmail.com" }, { userName: "Nicole@gmail.com" }, { userName: "Kalimi@gmail.com" }]);
});
// app.get('/customer', (req, res) => {
//     const customerId = req.query?.custid
//     if (customerId) {
//         return res.send(`the customer id you requested is: ${customerId}`)
//     } else {
//         return res.send("No id sent")
//     }
// })
app.get('/customers', (req, res) => {
    res.json(["customer1", "customer1", "customer1", "customer1", "customer1"]);
});

app.get('/add/:num1/:num2', (req, res) => {
    res.send(`the sum of the number is ${parseInt(req.params.num1) + parseInt(req.params.num2)}`)
})
app.get('/mul/:num1/:num2', (req, res) => {
    res.send(`the sum of the number is ${parseInt(req.params.num1) * parseInt(req.params.num2)}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
