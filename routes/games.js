const express = require("express");
const router = express.Router();

const { getAllGames, getSingleGame, createGame, deleteGame, updateGame } = require("../controllers/games");
const { getAllSpGames, getSingleSpGame, createSpGame, deleteSpGame, updateSpGame } = require("../controllers/specificGames");

router.route("/games").get(getAllGames).post(createGame)
router.route("/game/:id").get(getSingleGame).put(updateGame).delete(deleteGame);

router.route("/sp/games").get(getAllSpGames).post(createSpGame)
router.route("/sp/game/:id").get(getSingleSpGame).put(updateSpGame).delete(deleteSpGame);

module.exports = router;
