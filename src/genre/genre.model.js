const mongoose = require("mongoose");
const Schema = mongoose.Schema

const genreSchema = new mongoose.Schema(
  {
    userid:{type: Schema.Types.ObjectId, ref: 'User' },
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      unique: true
    }
   

  },
  { timestamps: true }
);

module.exports = mongoose.model("genre", genreSchema);