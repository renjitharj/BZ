const mongoose = require('mongoose');
const Schema=mongoose.Schema
// const db = require('../config/db');

const bookSchema = new mongoose.Schema({
    userid:{type: Schema.Types.ObjectId, ref: 'User' },
    title:{ type:String, default:"----",required:true },
    isbn:{ type:Number, required:true, unique:true},
    author:{type:String, default:"----" },
    orginalprice:{type:String, required:true},
    sellingprice:{type:String, required:true}

});


module.exports = mongoose.model('book', bookSchema);
