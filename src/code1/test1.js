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
        //关闭连接
        client.close()
    }
)