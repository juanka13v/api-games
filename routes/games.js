const express = require("express");
const router = express.Router();

const {
  getAllGames,
  getAllStaticsGames,
  getSingleGame,
  createGame,
  deleteGame,
  updateGame,
} = require("../controllers/games");
const {
  getAllFranchise,
  getSingleFranchise,
  createFranchise,
  deleteFranchise,
  updateFranchise,
} = require("../controllers/franchise");

router.route("/games").get(getAllGames).post(createGame);
router.route("/game/:id").get(getSingleGame).put(updateGame).delete(deleteGame);
router.route("/static/games").get(getAllStaticsGames);

// Franchise

router.route("/franchise").get(getAllFranchise).post(createFranchise);
router
  .route("/franchise/:id")
  .get(getSingleFranchise)
  .put(updateFranchise)
  .delete(deleteFranchise);

module.exports = router;
