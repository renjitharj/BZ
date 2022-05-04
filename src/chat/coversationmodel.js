const mongoose = require('mongoose')
//const { schema } = require('../user/user.model')
const Schema = mongoose.Schema
bcrypt = require('bcrypt')
// conversation schema
const conversationSchema = new Schema({
    firstUserId: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
    },
    secondUserId: {
        type: mongoose.Schema.Types.objectId, ref: 'User',
    },

    state: {
        type: String,
        default: "active"
    },

    lastMessage: {
        type: String,
        default: ""
    },

    dateTime: {
        type: Date, default: Date.now
    }
    })
module.exports = mongoose.model('Conversation', conversationSchema)

