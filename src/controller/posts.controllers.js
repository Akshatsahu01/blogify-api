

const post=(req,res)=>{
    const data=[{
        id:1,name:"post1"
    },{
        id:2,name:"post2"
    }]
    try{
        res.status(200).json({success:true
            ,message:"Post fatched sucessfully"
            ,post_s:data})

    }catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
}
const test=(req,res)=>{
        const data=[{
        id:1,name:"post1"
    },{
        id:2,name:"post2"
    }]
    try{
        const postId = parseInt(req.params.id)
        const post_by_id=data.find((i)=>i.id===postId)
        if (!post_by_id){
                  return res.status(404).json({
        success: false,
        message: "Post not found",
      });
        }

        res.status(200).json({status:true,
            message:"This page is created for testing",
            data:post_by_id
        })
    }catch(error){
            res.status(500).json({
      success: false,
      message: error.message,
    });

    }

    }
module.exports={post,test}