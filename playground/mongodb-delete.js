
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
        db.collection("Todos").deleteMany({texr:"Eat launch"}).then((result)=>{
            console.log(result);
        });



        //client.close();
});