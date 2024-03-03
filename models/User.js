const mongoose = require("mongoose");

const User = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
});

const UserModel = mongoose.model("User", User);
module.exports = UserModel;
