const genre = require("./genre.model");

exports.getGenreById = (req, res, next, id) => {
  genre.findById(id).exec((err, cate) => {
    if (err) {
      return res.status(400).json({
        error: "Category not found in DB"
      });
    }
    req.Genre = cate;
    next();
  });
};

exports.createGenre = async (req, res) => {
  try {
    const { id, role } = req.decoded;
   // req.body.role = req.decoded.role
   // if (req.decoded.role== req.body.role) {
     // req.body.userid = req.decoded.id
    
     // req.body.role = req.decoded.role
      // console.log(req.decoded.role)
      if(role=="ADMIN"){
      const Genre = await genre.create(req.body);
      Genre.save((err, Genre) => {
        if (err) {
          return res.status(400).json({
            error: "NOT able to save category in DB"
          });
        }
        res.json({ Genre });
      });
      }
    else{
      res.send("you are not authentcated")
    
    }
                                                                                                                                                                                                                  
  
  }
  catch (e) {
    console.log(e)

  }
};
