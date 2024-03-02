const mongoose = require("mongoose");

const AboutSchema = mongoose.Schema({
  cover: String,
  description: String,
});

const AboutModel = mongoose.model("About", AboutSchema);

module.exports = AboutModel;
