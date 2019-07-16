
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp'
    ,(err,client)=>{
        if (err){
            return console.log('Unable to connect to mongodb servers');
        }
        console.log('connected to database');
        const db = client.db('TodoApp');
        db.collection("Todos").findOneAndUpdate({
            _id:new ObjectID('5d2cd653524561c2eadc41a6')
        },{$set:
                {
           completed:true
        }
        },{
            returnOriginal:false
        }).then((result)=>{
            console.log(result)
        });


        //client.close();
});