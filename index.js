const express = require('express')
require('dotenv').config()
const app= express()

const port = 3000

app.get('/',(req,res)=>{
    res.send("hello cutie")
})

app.get('/twitter',(req,res)=>{
        res.send("i am a bad boy")
})
app.get('/youtube',(req,res)=>{
    res.send("<h2>you are so goated </h2>")
})
app.listen(process.env.PORT,()=>{
    console.log(` app listin on the prot ${process.env.PORT}`);
    
})