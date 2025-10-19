const express = require('express')
const app = express();

const userModel = require('./userModel');

app.get('/', (req,res) => {
    res.send("Hello");
})

app.get('/create',async (req,res) => {

   let createdUser = await userModel.create({
        name:"Puneeth",
        userName:"Raj",
        email:"puneeth@gmail.com",

    })
    res.send(createdUser)

})

app.get('/update',async (req,res) => {
        let updatedUser = await userModel.findOneAndUpdate({userName:"Raj"},{name:"Hello"},{new:true});
        res.send(updatedUser);
})

app.get('/read', async (req,res) => {
    let userRead = await userModel.find({});
    res.send(userRead)
})

app.get('/delete', async (req,res) => {
    let userDelete = await userModel.findOneAndDelete({name:"Hello"});
    res.send(userDelete)
})

app.listen(2000);