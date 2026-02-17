const express=require("express")
const router=express.Router()
const post_data=require("../controller/posts.controllers")
router.get("/",post_data.post)
module.exports=router