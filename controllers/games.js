const Game = require("../models/Game");
const {getGenderId} = require('../helpers/genderId');

const getAllGames = async (req, res) => {
  try {
    const games = await Game.find().populate('gender','name');
    res.status(200).json({ status: "success", data: games });
      
  } catch (error) {
    res.status(500).json({ status: "error", message: "Ha ocurrido un error" });
  }
};

const singleGame = async (req, res) => {
  res.status(200).json({ message: "Single game" });
};

const createGame = async (req, res) => {
  const { title, short_desc, gender } = req.body;

  const genderId = getGenderId(gender);

  if(!genderId) return res.status(500).json({status: "error", message: "gender is not supported"})

  const newGame = new Game({ title, short_desc, gender: genderId });

  try {
    const savedGame = await newGame.save();
    res.status(201).json({ status: "created", data: savedGame });
  } catch (error) {
    res
      .status(500)
      .json({
        status: "create error",
        message: "ha ocurrido un error al crear el juego",
      });
  }
};
module.exports = {
  getAllGames,
  singleGame,
  createGame,
};
