const express = require('express')
const app = express()

const path = require('path')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Database

const userModel = require('./models/user')
const postModel = require('./models/post')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req,res) => {
    res.render('index')
})

app.get('/create', (req,res) => {
    userModel.create({
        username:'Conor Mcgregor',
        
    })
})

app.listen(4000, (req,res) => {
    console.log(`Port has been started`)
})