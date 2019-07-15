
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp'
    ,(err,client)=>{
        if (err){
            return console.log('Unable to connect to mongodb servers');
        }
        console.log('connected to database');
        const db = client.db('TodoApp');
        //delete many
        // db.collection("Todos").deleteMany({text:"Eat launch"}).then((result)=>{
        //     console.log(result);
        // });

        //delete one
        // db.collection("Todos").deleteOne({text:"something to do"}).then((result)=>{
        //     console.log(result);
        // });

        //find one and delete
        db.collection("Todos").findOneAndDelete({completed:false}).then((result)=>{
            console.log(result);
        });

        //client.close();
});