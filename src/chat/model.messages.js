const mongoose = require('mongoose' );
const schema = mongoose. Schema;
// Message Schema
const messageSchema = new schema({
conversationId:{
type: mongoose.Schema.Types.ObjectId, ref: 'Conversation' ,
},
senderId:{
type: mongoose.Schema.Types. ObjectId, ref:'User'
},
message:{
type: String
},
dateTime:{
type: Date, default: Date.now
}
})
module.exports =mongoose.model('Message',messageSchema);