const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// saga
// recomended
// puntaje
// plataforma
// type [free-to-play, pay]
// secuelas[dlc spancion]

const BasicGameSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
      unique: true,
    },
    short_desc: {
      type: String,
      required: [true, "Please provide a short description"],
      maxlength: 200,
    },
    game_url: {
      // game url debe ser id y populate
      type: String,
      required: [true, "Please provide a url"],
      unique: true,
    },
    gender: [
      {
        type: String,
        lowercase: true,
        enum: {
          values: ["rpg", "shooter", "mmorpg", "survival"],
          message: "{VALUE} is not supported",
        },
        required: [true, "Please provide a gender"],
      },
    ],
    publisher: {
      type: String,
    },
    release_date: {
      type: Date,
      lowercase: true,
      required: [true, "Please provide a realease date"],
    },
    platform: [
      {
        type: String,
        lowercase: true,
        required: [true, "Please provide 1 or more playform"],
        enum: {
          values: ["ps4", "pc", "xbox"],
          message: "{VALUE} is not supported",
        },
      },
    ],
    developer: {
      type: String,
      lowercase: true,
      require: [true, "Please provide a developer name"],
    },
  },
  { versionKey: false }
);

module.exports = model("BasicGame", BasicGameSchema);
