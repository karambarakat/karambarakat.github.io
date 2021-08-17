const express = require("express");
const path = require("path");
const app = express();

// app.use(express.static(path.join(__dirname, "dist")));

app.use("*", (req, res) => {
  res.send("helo");
});

app.listen(process.env.PORT || 8800, () => {
  console.log("runnding on " + (process.env.PORT || 8800));
});
