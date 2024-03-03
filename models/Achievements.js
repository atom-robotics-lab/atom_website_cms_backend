const mongoose = require("mongoose");

const AchievementsSchema = mongoose.Schema({
  title: String,
  description: String,
  teamMember: String,
  prize: String,
  cover: String,
});

const AchievementModel = mongoose.model("Achievement", AchievementsSchema);

module.exports = AchievementModel;
