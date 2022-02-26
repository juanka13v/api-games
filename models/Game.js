const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const {reqString} = require('../helpers/reqString');
const {RequirementsSchema} = require('./Requirements');

// saga
// recomended
// puntaje
// plataforma
// type [free-to-play, pay]
// secuelas[dlc spancion]



const GameSchema = new Schema(
    {
        title: reqString("Title", { unique: true }),
        description: reqString("Short description"),
        // game url debe ser id y populate
        basic_game: reqString("Id", { unique: true }),
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
        minimum_system_requirements: RequirementsSchema
      },
      { versionKey: false }
); 

module.exports = model("Game", GameSchema);
