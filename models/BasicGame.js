const req = require("express/lib/request");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const { reqString } = require("../helpers/reqString");

// saga
// recomended
// puntaje
// plataforma
// type [free-to-play, pay]
// secuelas[dlc spancion]

const BasicGameSchema = new Schema(
  {
    title: reqString("Title", { unique: true }),
    short_description: reqString("Short description"),
    // game url debe ser id y populate
    game_url: reqString("Url", { unique: true }),
    genre: reqString("Genre", {
      lowercase: true,
      enum: {
        values: ["rpg", "shooter", "mmorpg", "survival"],
        message: "{VALUE} is not supported",
      },
    }),
    publisher: reqString("Publisher", { lowercase: true }),
    release_date: {
      type: Date,
      lowercase: true,
      required: [true, "Please provide a realease date"],
    },
    platform: [
      reqString("Platform", {
        lowercase: true,
        enum: {
          values: ["ps4", "pc", "xbox"],
          message: "{VALUE} is not supported",
        },
      }),
    ],
    developer: reqString("Developer", { lowercase: true }),
  },
  { versionKey: false }
);

module.exports = model("BasicGame", BasicGameSchema);
