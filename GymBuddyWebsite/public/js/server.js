const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "..")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "..", "html", "index.html"));
});

app.get("/workoutslist", function(req, res) {
  res.sendFile(path.join(__dirname, "..", "html", "workoutslist.html"));
});

app.get("/session", function(req, res) {
  res.sendFile(path.join(__dirname, "..", "html", "session.html"));
});

app.listen(3000, function() {
  console.log("Server started on port 3000.")
});
