const userController = require("../src/user/user.controller")
const bookController=require("../src/books/book.controller")
const express = require("express");
const validatetoken =require("../src/helpers/validateToeken")

const router = express.Router();
router.post('/registration',userController.userRegister)

router.post('/login', userController.userLogin)
router.post('/books',validatetoken.validateToken,bookController.createBook)
module.exports = router;