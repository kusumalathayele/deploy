

let express=require("express")
let app=express()
app.get("/",(req,res)=>{
    res.send("hello world")
}).listen(3006,()=>{
    console.log("port is running");
})