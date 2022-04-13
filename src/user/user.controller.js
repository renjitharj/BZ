const user = require("./user.model")
const jwt = require("../helpers/tokengeneration")

exports.userRegister= async (req,res)=>{

    console.log(req.body)
    var userObject = await user.create(req.body)
    res.send(userObject)
}
exports.userLogin = async (req, res) => {

    const userObj = await user.findOne({

        username: req.body.username

    })
if (userObj==null){
   return res.send('user not found')
}
    var matched = await userObj.comparePassword(req.body.password,async(err,match)=>
    {
        if (match){
            var gnjwt = await jwt.generateJwt(userObj._id,userObj._id,userObj._id)
            if (gnjwt.err){
               return res.send("Token generation failed")
            
            }
            else{
            return res.send({MESSAGE:"login successfull",token:gnjwt.token})

            }
        }
        else{
            res.send("Login failed")
        }
    })

}
exports.getUsers = async (req, res) => {
    try {
      const { id, role } = req.decoded;
      
      if (req.query.type == null) {
        let User = await user.find()
        return res.send({ success: true, data: User });
      } else {
        let User = await user.find({ role: req.query.type })
        return res.send({ success: true, data: User });
      }
  
    } catch (error) {
      console.log(error)
      return res.send(500).json({
        error: true,
        mge: error.message,
        
      });
    }
  };