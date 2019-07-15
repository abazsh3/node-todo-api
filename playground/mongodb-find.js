
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp'
    ,(err,client)=>{
        if (err){
            return console.log('Unable to connect to mongodb servers');
        }
        console.log('connected to database');
        const db = client.db('TodoApp');
        db.collection('Todos').find().count().then((count)=>{
            console.log("count:",count);
        },(err)=>{
            console.log("Unable to etch data",err);
        });
        // db.collection('Todos').find({
        //     _id:new ObjectID("5d2b8ec941f6f92604c12f42")
        // }).toArray().then((docs)=>{
        //     console.log(JSON.stringify(docs,undefined,2));
        // },(err)=>{
        //     console.log("Unable to etch data",err);
        // });




        //client.close();
});