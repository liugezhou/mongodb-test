#### Introduce
> 本demo项目主要为mongodb的连接基本操作，以及使用mongoose操作mongodb

#### Initial
> + npm init -y   
> + npm install mongodb mongoose -s

#### Content
> src下分为code1和code2两个目录。   
> +  src/code1/test1.js: 最基本的连接mongodb数据库代码示例。
> +  src/code1/test2.js: 连接数据库后的，切换数据库、集合的增删改查基本操作：insertOne、deleteOne、updateOne、find
>
> src/code2目录下主要为使用mongoose操作mongodb。  
> + src/code2/db.js: 使用mongoose连接mongodb，并导出。  
> + src/code2/models: 主要对应数据库的两个Model类，使用Scheme定义数据规范，model对应collection。    
> + src/code2/test: 在数据库连接以及相应model创建后，操作数据库表的基本代码示例。