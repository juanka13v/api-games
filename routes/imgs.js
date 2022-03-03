const router = require("express").Router();
const {createImg, getImage} = require("../controllers/imgs");

router.route("/upload").post(createImg)

module.exports = router
