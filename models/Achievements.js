const mongoose = require("mongoose");

const AchievementsSchema = mongoose.Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  teamMember: {type: String, required: true},
  prize: {type: String, required: true},
  cover: {type: String, required: true},
});

const AchievementModel = mongoose.model("Achievement", AchievementsSchema);

module.exports = AchievementModel;
