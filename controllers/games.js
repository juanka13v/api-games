const Game = require("../models/Game");

const getAllGames = async (req, res) => {
  try {
    await Game.find().populate('gender').exec((err, games) => {
      console.log(games);
      res.status(200).json({ status: "success", data: games });
    })
      
  } catch (error) {
    res.status(500).json({ status: "error", message: "Ha ocurrido un error" });
  }
};

const singleGame = async (req, res) => {
  res.status(200).json({ message: "Single game" });
};

const createGame = async (req, res) => {
  const { title, short_desc, gender } = req.body;

  const newGame = new Game({ title, short_desc, gender });

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
