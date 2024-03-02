const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: String,
    coverImg: String,
    summary: String,
    content: String,
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const BlogModel = mongoose.model("Blog", BlogSchema);

module.exports = BlogModel;
