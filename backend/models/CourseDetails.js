const mongoose = require('mongoose')

const coursesTemplate = new mongoose.Schema({
    courseName:{
        type:String,
        required:true 
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    thumbnail:{
        type: String,
        required: true
    },
    author:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})


module.exports = mongoose.model('coursestable', coursesTemplate)