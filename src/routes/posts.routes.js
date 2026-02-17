const express=require("express")
const router=express.Router()
const post_data=require("../controller/posts.controllers")
router.get("/post",post_data.post)
router.get("/test/:id",post_data.test)
module.exports=router  