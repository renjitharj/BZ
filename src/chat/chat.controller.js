
var message=require('../chat/model.messages');
// Get message By ID
exports. getMessageByUserId = (id ,callback) =>        {
  message.find ({senderId: id}, callback)
  .populate({path: 'senderId', select: [ 'firstname', 'username']});
}

// Get message By convercation Id
exports.getMessageByCoversationId =(id, callback) =>{
    message.find({ConversationId:id},callback) .sort({dateTime: 1})
    .populate({path:'senderId' , select:['firstname','username']});
    //.populate('senderId')

// Send message
exports.sendMessage = async (messageForm, callback) => { 
  req.body.userid=req.decoded.id

  var messageObj= await message.create(req.body) ;
  res.send(messageObj)
}
}