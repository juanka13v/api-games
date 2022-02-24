const Game = require("../models/Game");
const { getGenderId } = require("../helpers/genderId");

const getAllGames = async (req, res) => {
  try {
    const games = await Game.find().populate("gender", "name");
    res.status(200).json({ status: "success", data: games });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Ha ocurrido un error" });
  }
};

const getSingleGame = async (req, res) => {
  const { id } = req.params;
  try {
    const singleGame = await Game.findById(id);
    res.status(200).json({ status: "success", data: singleGame });
  } catch (error) {
    res.status(500).json({ status: "error", message: "game not found" });
  }
};

const createGame = async (req, res) => {
  const { title, short_desc, gender } = req.body;

  const genderId = getGenderId(gender);

  if (!genderId)
    return res
      .status(500)
      .json({ status: "error", message: "gender is not supported" });

  const newGame = new Game({ title, short_desc, gender: genderId });

  try {
    const savedGame = await newGame.save();
    res.status(201).json({ status: "created", data: savedGame });
  } catch (error) {
    res.status(500).json({
      status: "create error",
      message: "ha ocurrido un error al crear el juego",
    });
  }
};

const deleteGame = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedGame = await Game.findByIdAndDelete(id);
    res.status(203).json({ status: "success", message: "game eliminated" });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "error game not eliminated" });
  }
};

const updateGame = async (req, res) => {
  const { id } = req.params;
  const update = req.body
  try {
    const updatedGame = await Game.findByIdAndUpdate(id, update, {
      new: true,
    });
    res.status(203).json({ status: "success", data: updatedGame });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "error game not updated" });
  }
};

module.exports = {
  getAllGames,
  getSingleGame,
  createGame,
  deleteGame,
  updateGame,
};
