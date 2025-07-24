 require('dotenv').config()
const express = require("express"); //common js
// import express from "express" //Es modules
const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/google', (req, res) => {
    res.send('Roshancom')
})

app.get('/login', (req, res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res)=> {
  res.send('<h2>Roshan Tiwari</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
