const router = require("express").Router();
const upload = require("../helpers/multer");
const { createImg } = require("../controllers/imgs");

router.route("/upload").post(upload.array("images"), createImg);

module.exports = router;
