const express = require("express");
const router = express.Router();

const { getGenders, createGender } = require("../controllers/gender");

router.route("/gender").get(getGenders).post(createGender);

module.exports = router;
