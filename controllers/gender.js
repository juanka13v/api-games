const Gender = require("../models/Gender");

const getGenders = async (req, res) => {
  try {
    const genders = await Gender.find();
    res.status(200).json({ status: "success", data: genders });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "Ops... ha ocurrido un error" });
  }
};

const createGender = async (req, res) => {
  const { name } = req.body;
  const newGender = new Gender({name});
  try {
    const savedGender = await newGender.save();
    res.status(200).json({ status: "success", data: savedGender });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "Ops... ha ocurrido un error" });
  }
};

module.exports = {
  getGenders,
  createGender,
};
