const express=require("express")
const app=express()
const postrouter=require("./src/routes/posts.routes")
app.get("/",(req,res)=>{
  res.status(200).json({message:"This is home page"})
})
app.use("/api/posts",postrouter)

app.listen(3000,()=>{
  console.log("server is running on port 3000")
})