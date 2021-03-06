const express = require("express");
const path = require("path");
const app = express();

// app.use(express.static(path.join(__dirname, "dist")));

app.use(express.static(path.join("dist", "html")));
app.use(express.static(path.join("dist")));

app.use("/portfolio", require("./portfolio_middleware.js"));

app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "dist", "html", "404.html"));
});
// app.use(express.static(path.join("dist")))

app.listen(process.env.PORT || 8800, () => {
  console.log("running on " + (process.env.PORT || 8800));
});
