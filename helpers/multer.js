const { diskStorage } = require("multer");
const multer = require("multer");
const path = require("path");

module.exports = multer({
  storage: diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".jpg" && ext !== ".png" && ext !== ".jpeg") {
      cb(new Error("File is not supported"), false);
      return;
    }
    cb(null, true);
  },
});
