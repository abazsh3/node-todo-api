

// let user = {name:'abolfazl',age: 22};
// let {name,age}=user;
// console.log(name,age);//will print abolfazl 22

const {MongoClient,ObjectID} = require('mongodb');
// let obj = new ObjectID;
// console.log(obj.getTimestamp());
MongoClient.connect('mongodb://localhost:27017/TodoApp'
    ,(err,client)=>{
        if (err){
            return console.log('Unable to connect to mongodb servers');
        }
        console.log('connected to database');
        const db = client.db('TodoApp');
        // db.collection('Todos').insertOne({
        //     text : 'something to do',
        //     completed : false
        // },(err,result)=>{
        //    if (err){
        //        return console.log('Unable to add the item',err)
        //    }
        //    console.log(JSON.stringify(result.ops,undefined,2));
        // });
        // db.collection('users').insertOne({
        //     name:'Abolfazl',
        //     age : 22,
        //     location : 'dorud'
        // },(err,res)=>{
        //    if (err){
        //        return console.log(err);
        //    }
        //    console.log(JSON.stringify(res.ops,undefined,2));
        // });
        client.close();
});