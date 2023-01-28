const express = require('express')
const app = express()

app.use(express.json());


const datas =[
   
];
let baseId = 1;

app.get('/users',(req, res)=>{

    res.status(200).json(datas)
})

app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    res.status(200).json(datas.find(data=> data.id == id))
})

app.post('/users',(req,res)=>{

    const data = req.body;
    const newData ={
        "id": baseId++,
        "firstName": data.firstName,
        "lastName": data.lastName,
        "email": data.email,
        "password": data.password,
        "age": data.age

    }
    datas.push(newData);
    res.status(201).json(newData);

})



app.listen(9000,()=>{
    console.log('localhos:9000 up')
})

module.exports = app
