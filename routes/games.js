const express = require("express");
const router = express.Router();

const { getAllGames, getSingleGame, createGame, deleteGame, updateGame } = require("../controllers/games");

router.route("/games").get(getAllGames).post(createGame)
router.route("/game/:id").get(getSingleGame).put(updateGame).delete(deleteGame);

module.exports = router;
