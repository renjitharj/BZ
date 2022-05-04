const router = require('express').Router();
const bookModel = require('./book.model');
const jwt = require("../helpers/tokengeneration")


 exports.createBook=async function (req, res) {
  try{
    req.body.userid=req.decoded.id
    const isbn = req.body.isbn;
   //const author = req.body.author;
   const bookExist = await bookModel.findOne({isbn : isbn});
 
   if (bookExist) return res.send('Book already exist');
   //var data = await bookModel.create({title,isbn,author});
  // data.save();
  var userObject = await bookModel.create(req.body)
  res.send(userObject)
  // res.send("Book Uploaded");
       
        
    }
    catch(e)
    {
        console.log(e)
    }

   //const title= req.body.title;
   
};
/*exports.updateStatus = async (req, res) => {
  
  var Book = await bookModel.findByIdAndUpdate(req.body._id, req.body)
 // Project = await projectModel.findById(req.body._id)
  return res.status(200).json({
    created: Book,
    message: "Success"
  });
} catch (e) {
  console.log(e)
  return res.status(404).json({
    status: false,
    message: "Something went wrong",
  });
}
};*/
