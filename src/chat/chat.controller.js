var message=require('../chat/model.messages');
// Get message By ID
module.exports. getMessageByUserId = (id ,callback) =>        {
  message.find ({senderId: id}, callback)
  .populate({path: 'senderId', select: [ 'name', 'profile picture']});
}

// Get message By convercation Id
module.exports.getMessageByCoversationId =(id, callback) =>{
    message.find({ConversationId:id},callback) .sort({dateTime: 1})
    .populate({path:'senderId' , select:['name','profile_picture']});
    //.populate('senderId')

// Send message
module.exports.sendMessage = async (messageForm, callback) => { 
  message.create(messageForm, callback) ;
}
}