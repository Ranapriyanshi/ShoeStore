const express = require("express");
const router = express.Router();
const Shoe = require("../models/Shoe");

// Get all shoes
router.get("/", async (req, res) => {
  const shoes = await Shoe.find();
  res.json(shoes);
});

// Get shoes by IDs (for comparison)
router.post("/compare", async (req, res) => {
  const { ids } = req.body;
  const shoes = await Shoe.find({ _id: { $in: ids } });
  res.json(shoes);
});

module.exports = router;
