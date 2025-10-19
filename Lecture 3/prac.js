const express = require('express')
const path = require('path')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'prac')))

app.set('view engine','ejs')

app.get('/',(req,res) => {
    res.render('prac')
})

app.get('/profile/:username',(req,res) => {
    res.send(`hello ${req.params.username}`)
})

app.listen(8080)
