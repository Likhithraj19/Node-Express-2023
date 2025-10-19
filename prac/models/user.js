const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/practiseMongo')

let userSchema = mongoose.Schema({
    username:String,
    email:String,
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:''
        }
    ]
})

module.exports = mongoose.model('user',userSchema)