let express = require('express');
let bodyParser = require('body-parser');
let {mongoose}=require('./db/mongoose');
let {Todo}=require('./models/Todo');
let {User}=require('./models/User');

let app =express();
app.use(bodyParser.json());
app.post('/todos',(req,res)=>{
    let todo = new Todo({
        text:req.body.text
    })
    todo.save().then((doc)=>{
        res.send(doc);
    },(e)=>{
        res.status(400).send(e);
    })
});

app.listen(3000,()=>{
    console.log('app is running on port 3000');
});
