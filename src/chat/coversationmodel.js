const mongoose = require('mongoose')
const { schema } = require('../user/user.model')
const Schema = mongoose.Schema
bcrypt = require('bcrypt')
// conversation schema
const conversationSchema = new schema({
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
const conversation = module.exports = mongoose.model('Conversation', conversationSchema)

