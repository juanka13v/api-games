const BasicGame = require("../models/BasicGame");

const getAllGames = async (req, res) => {
  const { genre, platform, date } = req.query;
  const options = {};
  if (genre) {
    options.genre = genre;
  }
  if (platform) {
    options.platform = platform;
  }

  if (date) {
    options.release_date = {
      $gte: `${date}-1-1`,
      $lt: `${parseFloat(parseInt(date) + 1)}-1-1`,
    };
  }

  console.log(options);

  try {
    const games = await BasicGame.find(options);
    if (!games[0])
      return res
        .status(404)
        .json({ status: "empty", message: "Empty collection" });
    res.status(200).json({ status: "success", data: games });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Ha ocurrido un error" });
  }
};

const getSingleGame = async (req, res) => {
  const { id } = req.params;
  try {
    const singleGame = await BasicGame.findById(id);
    if (!singleGame)
      return res
        .status(404)
        .json({ status: "error", message: "game not found" });
    res.status(200).json({ status: "success", data: singleGame });
  } catch (error) {
    res.status(500).json({ status: "error", message: "game not found", error });
  }
};

const createGame = async (req, res) => {
  const newGame = new BasicGame(req.body);

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

const deleteGame = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedGame = await BasicGame.findByIdAndDelete(id);
    if (!deletedGame)
      return res
        .status(404)
        .json({ status: "success", message: "Game not found" });

    res.status(203).json({ status: "success", message: "game eliminated" });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "error game not eliminated", error });
  }
};

const updateGame = async (req, res) => {
  const { id } = req.params;
  const update = req.body;
  try {
    const updatedGame = await BasicGame.findByIdAndUpdate(id, update, {
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
  getAllGames,
  getSingleGame,
  createGame,
  deleteGame,
  updateGame,
};
