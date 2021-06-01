const User = require('../models/User')

!(async  ()=>{
    // 创建用户
    // const liugezhou = await User.create({
    //     username:'liugezhou',
    //     password:'1212',
    //     nickname:'六个周'
    // })
    // console.log(liugezhou)

    // 查询
   const userList =  await User.find()
   console.log(userList)
})()