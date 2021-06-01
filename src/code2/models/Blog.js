const mongoose = require('../db')

// 用Schema定义数据规范
const BlogSchema = mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    content: String,
    author: {
        type:String,
        required: true
    }
})

// Model对应 collection
const Blog = mongoose.model('blog',BlogSchema)

module.exports = Blog