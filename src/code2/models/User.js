const mongoose = require('../db')

// 用Schema定义数据规范
const UserSchema = mongoose.Schema({
    username: {
        type:String,
        required:true,
        unique:true
    },
    password: String,
    nickname: String
})

// Model对应 collection
const User = mongoose.model('user',UserSchema)

module.exports = User