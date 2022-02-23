const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const GameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a title"],
  },
  short_desc: {
    type: String,
    required: [true, "Please provide a short description"],
    maxlength: 200,
  },
  gender: [{ type: Schema.Types.ObjectId, ref: 'gender' }],
});

module.exports = model("Game", GameSchema);
