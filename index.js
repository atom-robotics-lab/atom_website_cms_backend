const express = require("express");
const app = express();
const bcrypt = require("bcryptjs");
const cors = require("cors");
const User = require("./models/User");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
dotenv.config();
const mongoDBURI = process.env.MONGO_DB_URI || "YOUR_MONGO_DB_URI";
const salt = bcrypt.genSaltSync(10);
const secret = "ubwafjfda66452fesnjksbeuwer854";
mongoose.connect(mongoDBURI).then(console.log("connected to db"));
console.log(process.env.MONGO_DB_URI);
app.post("/dashboard/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json({ userDoc });
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const passOk = bcrypt.compareSync(password, userDoc.password);
  if (passOk) {
    jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
      if (err) throw err;
      res.cookie("token", token).json({
        id: userDoc._id,
        username,
      });
    });
  } else {
    res.status(400).json("wrong credentials");
  }
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
