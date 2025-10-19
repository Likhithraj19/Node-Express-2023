const mongoose = require('mongoose')

let postSchema = mongoose.Schema({
    postData:String,
    postname:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
})

module.exports = mongoose.model('post',postSchema)