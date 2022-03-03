const cloudinary = require("../helpers/cloudinary");

const createImg = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path)
        res.json(result)
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    createImg,
 
}