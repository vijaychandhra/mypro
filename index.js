const express=require('express')
const app=express();
const port=3000||process.env.PORT
app.get('/',(req,res)=>{
    res.send("hi")
})
app.listen(3000,()=>{
    console.log('hiii')
})