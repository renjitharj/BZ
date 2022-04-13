const mongoose = require('mongoose');
const Schema=mongoose.Schema
// const db = require('../config/db');

const bookSchema = new mongoose.Schema({
    userid:{type: Schema.Types.ObjectId, ref: 'User' },
    title:{ type:String, default:"----",required:true },
    isbn:{ type:Number, required:true, unique:true},
    author:{type:String, default:"----" },
    bookimageurl:{type:String},
    orginalprice:{type:Number, required:true},
    sellingprice:{type:Number, required:true},
    status: {
        type: String,
        enum: ['APPROVED', 'UNAPPROVED', 'SOLD'],
        required: true,
        default: 'UNAPPROVED'
      },

});


module.exports = mongoose.model('book', bookSchema);
