require("dotenv").config();
const express = require("express");
const app = express();
const upload = require("./helpers/multer");
const gamesRouter = require("./routes/games");
const imgsRouter = require("./routes/imgs");

const { dataBase } = require("./data");
const { createGames, changeImages } = require("./populate");
const { callOfDuty } = require("./dataImg");

// connect to MongoDB
const connectDB = require("./db/connect");

// middlewares
app.use(express.json());
//app.use(upload.single("image"));
//app.use(upload.array("images"));

// routes
app.use("/api/v1/", gamesRouter);
app.use("/api/v1/img", imgsRouter);


app.post("/api/v2/upload", upload.array("images"), (req, res) => {
  res.json({ data: req.files });
});


const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
