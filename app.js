require("dotenv").config();
const express = require("express");
const app = express();
const upload = require("./helpers/multer");
const gamesRouter = require("./routes/games");
const imgsRouter = require("./routes/imgs");

const BasicGame = require("./models/BasicGame");
const cloudinary = require("cloudinary").v2;
const { dataBase } = require("./data");
const createGames = require("./populate");

// connect to MongoDB
const connectDB = require("./db/connect");

// middlewares
app.use(express.json());
//app.use(upload.single("image"));
//app.use(upload.array("images"));

// routes
app.use("/api/v1/", gamesRouter);
app.use("/api/v1/img", imgsRouter);

app.get("/", (req, res) => {
  res.send("<h1>Games api</h1>");
});

app.post("/api/v1/test", upload.array("images"), (req, res) => {
  //console.log(req.files);
  for (let i = 0; i < req.files.length; i++) {
    console.log(req.files[i].path); 
    console.log("----------------------------------");
  }
  //console.log(req.files);
  res.send("done");
});

app.get("/api/v2/create", (req, res) => {
  createGames(dataBase);
  res.send("done")
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
