const express = require("express");//import express
const app = express();//express assign to app for use functions in the express
const router = require('./routes');
app.use(express.json());
app.use(router);



app.listen(3000,() => {
    console.log("server is running on port 3000")
})