const express=require("express")
const cors = require("cors"); 
const app=express()
const main=require("./routers/router.js")

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/page",main)
app.get("/",(req,res)=>{
    res.send("server usage succssfull")
})
app.listen(4000,()=>{
    console.log("server created successfully ");
})  
