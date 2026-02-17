

const post=(req,res)=>{
    const data=[{
        id:1,name:"post1"
    },{
        id:2,name:"post2"
    }]
    res.status(200).json({message:"Post fatched sucessfully",post_s:data})
}

module.exports={post}