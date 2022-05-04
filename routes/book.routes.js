const express = require("express");
const router = express.Router();
const bookController=require("../src/books/book.controller")
const validatetoken =require("../src/helpers/validateToeken")
router.post('/books',validatetoken.validateToken,bookController.createBook)

module.exports = router;