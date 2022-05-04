const express = require("express");
const router = express.Router();
const genreController=require("../src/genre/genre.controller")
const validatetoken =require("../src/helpers/validateToeken")
//router.param("genreById",genreController.getGenreById)
//router.post("/creategen",validatetoken.validateToken, genreController.createGenre)
module.exports = router;
