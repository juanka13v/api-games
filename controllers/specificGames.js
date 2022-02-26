const Game = require("../models/Game");

const getAllSpGames = async (req, res) => {
  try {
    const games = await Game.find();
    if(!games[0]) return res.status(404).json({status: "empty", message: "Empty collection"})
    res.status(200).json({ status: "success", data: games });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Ha ocurrido un error" });
  }
};

const getSingleSpGame = async (req, res) => {
  const { id } = req.params;
  try {
    const singleGame = await Game.findById(id);
    if (!singleGame)
      return res
        .status(404)
        .json({ status: "error", message: "game not found" });
    res.status(200).json({ status: "success", data: singleGame });
  } catch (error) {
    res.status(500).json({ status: "error", message: "game not found", error });
  }
};

const createSpGame = async (req, res) => {
  const newGame = new Game(req.body);

  try {
    const savedGame = await newGame.save();
    res.status(201).json({ status: "created", data: savedGame });
  } catch (error) {
    res.status(500).json({
      status: "create error",
      message: "ha ocurrido un error al crear el juego",
      error,
    });
  }
};

const deleteSpGame = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedGame = await Game.findByIdAndDelete(id);
    if(!deletedGame) return res.status(404).json({ status: "success", message: "Game not found" });

    res.status(203).json({ status: "success", message: "game eliminated" });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "error game not eliminated", error });
  }
};

const updateSpGame = async (req, res) => {
  const { id } = req.params;
  const update = req.body;
  try {
    const updatedGame = await Game.findByIdAndUpdate(id, update, {
      new: true,
    });
    res.status(203).json({ status: "success", data: updatedGame });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "error game not updated", error });
  }
};

module.exports = {
  getAllSpGames,
  getSingleSpGame,
  createSpGame,
  deleteSpGame,
  updateSpGame,
};
