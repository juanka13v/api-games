const cloudinary = require("../helpers/cloudinary");


const createImg = async (req, res) => {
    let imgs = []
    
    for (let i = 0; i < req.files.length; i++) {
        try {
            const result = await cloudinary.uploader.upload(req.files[i].path)
            imgs.push(result.url)
        } catch (error) {
            console.log(error);
        }   
    }

    res.json({data: imgs})
}



module.exports = {
    createImg,
 
}