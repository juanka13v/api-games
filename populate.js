const BasicGame = require("./models/BasicGame");
const cloudinary = require("cloudinary").v2;
const { dataBase } = require("./data");

const createGames = async (obj) => {
  //let newObj = []
  obj.forEach(async (element) => {
    try {
      // Convert thumbnail to url
      const result = await cloudinary.uploader.upload(element.thumbnail);
      element.thumbnail = result.url;
      console.log("thumbnail done");
    } catch (error) {
      console.log(error);
    }

    for (let i = 0; i < element.screenshots.length; i++) {
      try {
        // Convert imgs to url
        const resultA = await cloudinary.uploader.upload(
          element.screenshots[i]
        );
        element.screenshots[i] = resultA.url;
        console.log(`image ${i} done`);
      } catch (error) {
        console.log(error);
      }
    }

    // create model base

    const newGame = new BasicGame(element);

    try {
      const savedGame = await newGame.save();
      console.log(`success ${savedGame.title} saved`);
    } catch (error) {
      console.log(error);
    }

    //console.log(element)
    //newObj.push(element)
  });

  console.log(obj);
};

module.exports = createGames;
