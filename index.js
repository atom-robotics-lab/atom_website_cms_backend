const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.json("ok");
});

app.post("/adminLogin");
app.listen(4000, () => {
  console.log("server is running on port 4000");
});
