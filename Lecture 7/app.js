const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

app.use(express.urlencoded({extended : true}))
app.use(cookieParser());

app.get('/',(req,res) => {

    // bcrypt.genSalt(10,(err,salt) => {
    //     bcrypt.hash('Pass',salt,(err,hash) => {
    //         console.log(salt)
    //     })
    // })

    // bcrypt.compare('MyPassword','$2b$10$TUzlzsjYeLSHIKREg4p95umwuYFarwSSzqDrgplI36o8o3jb2PxlW',(err,result) => {
    //     console.log(result);
    // })

    let token = jwt.sign({email:'likhithrj@gmail.com'},'secret')
    res.cookie('token',token)
    res.send('Hello its working')
})

app.get('/read',(req,res) => {
    let data = jwt.verify(req.cookies.token,'secret')
    console.log(data)
})

app.listen(4000,(req,res) => {
    console.log("Port 4000 has been started")
})