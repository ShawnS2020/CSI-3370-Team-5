import express from "express";
import bodyParser from "body-parser";
import path from "path";
import {fileURLToPath} from 'url';
import {workoutsList} from "./workoutslist.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __js = path.dirname(__filename);
const __public = path.dirname(__js);

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__public));

app.get("/", function(req, res) {
  res.render(__public + "/views/index", {selected: "selected"});
});

app.post("/", function(req, res) {
  if (req.body.btn == "workoutsList") {
    res.redirect("/workoutslist");
  }
  else {
    res.redirect("/session");
  }
});

app.get("/workoutslist", function(req, res) {
  res.render(__public + "/views/workoutslist", {workoutsList: workoutsList});
});

app.post("/workoutslist", function(req, res) {
  res.redirect("/");
});

app.get("/session", function(req, res) {
  res.render(__public + "/views/session");
});

app.post("/session", function(req, res) {
  res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server started on port 3000.")
});
