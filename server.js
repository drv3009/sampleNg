const express = require("express");
const app = express();

const path = require("path");

app.use(express.static(__dirname + "/dist/myapp"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/myapp/index.html"));
});

app.listen(process.env.PORT || 8080);
