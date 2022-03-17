const express = require("express");
const router = express.Router();

const {
  getAllGames,
  getAllStaticsGames,
  getSingleGame,
  createGame,
  deleteGame,
  updateGame,
  getRecommendationGames
} = require("../controllers/games");


router.route("/games").get(getAllGames).post(createGame);
router.route("/game/:id").get(getSingleGame).put(updateGame).delete(deleteGame);
router.route("/static/games").get(getAllStaticsGames);
router.route("/recommendations").get(getRecommendationGames)


module.exports = router;
