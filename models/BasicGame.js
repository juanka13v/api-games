const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const { reqString } = require("../helpers/reqString");
const { RequirementsSchema } = require("./Requirements");


const BasicGameSchema = new Schema(
  {
    title: reqString("Title", { unique: true }),
    thumbnail: reqString("Thumbnail"),
    short_description: reqString("Short description"),
    description: reqString("Description"),
    genre: reqString("Genre", {
      lowercase: true,
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
      }),
    ],
    franchise: {
      type: String,
      default: "any"
    },
    developer: reqString("Developer", { lowercase: true }),
    minimum_system_requirements: RequirementsSchema,
    screenshots: [reqString("Image")],
  },
  { versionKey: false }
);

module.exports = model("BasicGame", BasicGameSchema);
