const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const { reqString } = require("../helpers/reqString");

const RequirementsSchema = new Schema({
  os: reqString("Os"),
  processor: reqString("Processor"),
  graphics: reqString("Graphics"),
  storage: reqString("Storage"),
});

const Requirements = model("Requirements", RequirementsSchema);
module.exports = {
    Requirements,
    RequirementsSchema
}