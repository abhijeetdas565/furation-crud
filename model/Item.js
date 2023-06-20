const mongoose = require("mongoose");

const itemchema = new mongoose.Schema({
  title: String,
  price: String,
  image: String,
  details: String
});

module.exports = mongoose.model("item", itemchema);
