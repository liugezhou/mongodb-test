const Blog = require('../models/Blog')

!(async  ()=>{
    // 创建博客
    // const blog = await Blog.create({
    //     title:'liugezhou4',
    //     content:'内容4',
    //     author:'mongoose'
    // })
    // console.log(blog)

    // 查询
//    const blogList =  await Blog.find({author:'mongoose'}).sort({_id:-1})
//    console.log(blogList)

   //修改
   const res = await Blog.findOneAndUpdate(
       { title:'liugezhou'  },
       {content:'new content'},
       {new:true}    
   )
   console.log(res)
})()