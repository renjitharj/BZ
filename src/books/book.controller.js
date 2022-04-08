// const router = require('express').Router();
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
   res.send("Book Uploaded");
       
        
    }
    catch(e)
    {
        console.log(e)
    }

   //const title= req.body.title;
   
};

