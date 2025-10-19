const express = require('express')
const app = express();
const userModel = require('./models/user')
const postModel = require('./models/post')

app.get('/',(req,res) => {
    res.send('Hello')
})

app.get('/create', async (req,res) => {
    let user = await userModel.create({
        username:'Likhith',
        email:'likhithrj@gmail.com',
        age:21
    });
    res.send(user);
})

app.get('/post/create', async (req,res) => {
    let post = await postModel.create({
        postdata:'Hello Everyone how are you?',
        user:"663f63571d930f2231b4975b"
    });

    let user = await userModel.findOne({_id:"663f63571d930f2231b4975b"});
    user.posts.push(post._id)
    user.save()
    res.send({post,user})
})

app.listen(4000)