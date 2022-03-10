const BasicGame = require("./models/BasicGame");

const createGames = async (arr) => {
  arr.forEach( async (element) => {
    const newGame = new BasicGame(element);

    try {
      const savedGame = await newGame.save();
      console.log(`success ${savedGame.title} saved`);
    } catch (error) {
      console.log(error);
    }
  });
};

const changeImages = async (id, imgs) => {
  const thumbnail = imgs[0];
  const newImgs = [];

  for (let i = 1; i < imgs.length; i++) {
    newImgs.push(imgs[i]);
  }

  try {
    const updatedGame = await BasicGame.findByIdAndUpdate(
      id,
      { thumbnail, screenshots: newImgs },
      {
        new: true,
      }
    );
    console.log("update imgs");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createGames, changeImages };
