const express = require("express");
const router = express.Router();

const { getAllGames, singleGame, createGame } = require("../controllers/games");

router.route("/games").get(getAllGames);
router.route("/game").get(singleGame).post(createGame)

module.exports = router;
