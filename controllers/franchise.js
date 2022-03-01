const Franchise = require("../models/Franchise");

const getAllFranchise = async (req, res) => {

  try {
    const franchises = await Franchise.find().populate('franchise_games');
    if (!franchises[0])
      return res
        .status(404)
        .json({ status: "empty", message: "Empty collection" });
    res.status(200).json({ status: "success", data: franchises });
  } catch (error) {
    res.status(500).json({ status: "error", message: "Ha ocurrido un error" });
  }
};

const getSingleFranchise = async (req, res) => {
  const { id } = req.params;
  try {
    const singleFranchise = await Franchise.findById(id);
    if (!singleFranchise)
      return res
        .status(404)
        .json({ status: "error", message: "franchise not found" });
    res.status(200).json({ status: "success", data: singleFranchise });
  } catch (error) {
    res.status(500).json({ status: "error", message: "franchise not found", error });
  }
};

const createFranchise = async (req, res) => {
  const newFranchise = new Franchise(req.body);

  try {
    const savedFranchise = await newFranchise.save();
    res.status(201).json({ status: "created", data: savedFranchise });
  } catch (error) {
    res.status(500).json({
      status: "create error",
      message: "ha ocurrido un error al crear la franquicia",
      error,
    });
  }
};

const deleteFranchise = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedFranchise = await Franchise.findByIdAndDelete(id);
    if (!deletedFranchise)
      return res
        .status(404)
        .json({ status: "success", message: "Franchise not found" });

    res.status(203).json({ status: "success", message: "Franchise eliminated" });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "error franchise not eliminated", error });
  }
};

const updateFranchise = async (req, res) => {
  const { id } = req.params;
  const update = req.body;
  try {
    const updatedFranchise = await Franchise.findByIdAndUpdate(id, update, {
      new: true,
    });
    res.status(203).json({ status: "success", data: updatedFranchise });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: "error Franchise not updated", error });
  }
};

module.exports = {
  getAllFranchise,
  getSingleFranchise,
  createFranchise,
  deleteFranchise,
  updateFranchise
};
