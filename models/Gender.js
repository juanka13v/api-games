const mongoose = require("mongoose");
const { model } = mongoose;

const GenderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "gender is required"],
    unique: [true, "This name is used already"],
  },
});

module.exports = model("Gender", GenderSchema);
