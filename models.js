const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        maxlength: 64,
    },
    age:{
        type: Number,
        required: true,
    },
    hobbies:{
        type: Array,
        items: {type: String},
        uniqueItems: true,
    }
});
