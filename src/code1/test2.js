const MongoClient = require('mongodb')

const url =  'mongodb://localhost:27017'
const dbName = 'myblog'

MongoClient.connect(
    url,
    {
        //配置
         useUnifiedTopology: true 
    },
    (err,client) =>{
        if(err){
            console.error('mongodb  connect error',err)
            return
        }
        // 连接成功
        console.log('mongodb connect success')

        // 切换数据库
        const db = client.db(dbName)

        //集合
        const userCollection = db.collection('users')

        //删除
        userCollection.deleteOne({
            username:'mongodb'
        },(err,result)=>{
                if(err){
                    console.log('user delete error', err)
                    return
                }
                console.log(result)
                client.close()
            }
        )
        //修改
        userCollection.updateOne({
            username:'mongodb'
        },{$set:{username:'mongoose'}},(err,result)=>{
            if(err){
                console.log('user update error', err)
                return
            }
            console.log(result)
            client.close()
        })

        // 新增
        userCollection.insertOne({
            username:'mongodb',
            password:'abc',
            nickname:'mongoose'
        },(err,result) =>{
            if(err){
                console.log('user insert error', err)
                return
            }
            console.log(result)
            client.close()
        })
        // 文档--查询
        userCollection.find().toArray((err,result) => {
            if(err){
                console.log('user find error', err)
                return
            }
            console.log(result)
              //关闭连接
            client.close()
        })
    }
)