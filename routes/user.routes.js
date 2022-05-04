const userController = require("../src/user/user.controller")
const bookController=require("../src/books/book.controller")
const chatController=require("../src/chat/chat.controller")
const express = require("express");
const validatetoken =require("../src/helpers/validateToeken")

const router = express.Router();
router.post('/registration',userController.userRegister)

router.post('/login', userController.userLogin)
router.get('/getusers', validatetoken.validateToken, userController.getUsers);
//router.post('/books',validatetoken.validateToken,bookController.createBook)
//router.post('/chat', validatetoken.validateToken, chatController.sendMessage)

module.exports = router;