const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const { reqString } = require("../helpers/reqString");


const franchiseSchema = new Schema({
    franchise: reqString("Franchise", {unique: true}),
    thumbnail: String,
    description: String,
    franchise_games: [
       {
           type: Schema.Types.ObjectId,
           ref: "BasicGame"
       }
    ]

})




module.exports = model("Franchise", franchiseSchema);