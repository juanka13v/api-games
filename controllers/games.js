const BasicGame = require("../models/BasicGame");
const { getRandomNumber } = require("../helpers/ramdon");

const getRecommendationGames = async (req, res) => {
  try {
    const games = await BasicGame.find();
    const newArray = [];

    for (let i = 0; i < 3; i++) {
      newArray.push(games[getRandomNumber(1, games.length)]);
    }

    res.status(200).json({ status: "success", data: newArray });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Ha ocurrido un error" });
  }
};

const getAllStaticsGames = async (req, res) => {
  try {
    const games = await BasicGame.find();
    if (!games[0])
      return res
        .status(404)
        .json({ status: "empty", message: "Empty collection" });
    res.status(200).json({ status: "success", data: games });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Ha ocurrido un error" });
  }
};

const getAllGames = async (req, res) => {
  const { genre, platform, date, page, limit, franchise } = req.query;
  const options = {};
  const select = [
    "title",
    "genre",
    "thumbnail",
    "short_description",
    "platform",
  ];

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

  if (franchise) {
    options.franchise = franchise;
  }

  try {
    const games = await BasicGame.find(options)
      .limit(limit)
      .skip(page * limit)
      .select(select);
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
    const recommendations = await BasicGame.find({ genre: singleGame.genre });

    const newRecommendations = []
    recommendations.forEach(item => {
      if(item.title != singleGame.title) {
        newRecommendations.push(item)
      }
    })


    if (!singleGame)
      return res
        .status(404)
        .json({ status: "error", message: "game not found" });
    res
      .status(200)
      .json({ status: "success", data: singleGame, re: newRecommendations });
  } catch (error) {
    res.status(500).json({ status: "error", message: "game not found", error });
  }
};

const createGame = async (req, res) => {
  const newGame = new BasicGame(req.body);

  if (req.query.password !== process.env.CONTRA) {
    res.status(403).json({ status: "error", message: "Invalid Password" });
  } else {
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
  }
};

const deleteGame = async (req, res) => {
  const { id } = req.params;

  if (req.query.password !== process.env.CONTRA) {
    res.status(403).json({ status: "error", message: "Invalid Password" });
  } else {
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
  }
};

const updateGame = async (req, res) => {
  const { id } = req.params;
  const update = req.body;

  if (req.query.password !== process.env.CONTRA) {
    res.status(403).json({ status: "error", message: "Invalid Password" });
  } else {
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
  }
};

module.exports = {
  getAllGames,
  getSingleGame,
  createGame,
  deleteGame,
  updateGame,
  getAllStaticsGames,
  getRecommendationGames,
};
