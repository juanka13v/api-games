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
  gender: [{ type: Schema.Types.ObjectId, ref: 'Gender', enum: {
    values: ['62167736bb7fd63a91a704bb', '621736df5d68fee805442ef6'],
    message: '{VALUE} is not supported'
  } }],
});

module.exports = model("Game", GameSchema);
