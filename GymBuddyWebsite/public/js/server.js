// ***COMMONJS***
// const express = require("express");
// const bodyParser = require("body-parser");
// const path = require("path");
// const Session = require(__dirname + "/sessionclass.js")

import express from "express";
import bodyParser from "body-parser";
import path from "path";
import {fileURLToPath} from 'url';
import {Session} from "./sessionclass.js";
import {workoutsList} from "./workoutslist.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __js = path.dirname(__filename);
const __public = path.dirname(__js);

const session = new Session();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
// ***COMMONJS***
// app.use(express.static(path.join(__dirname, "..")));
app.use(express.static(__public));

app.get("/", function(req, res) {
  // ***COMMONJS***
  // res.sendFile(path.join(__dirname, "..", "html", "index.html"));

  // res.sendFile(__public + "/html/index.html");

  res.render(__public + "/views/index");
});

app.post("/", function(req, res) {

  if (req.body.btn == "generate") {

    const selectedGoal = req.body.goal;
    const selectedMuscles = req.body.muscles;
    const minTime = Math.min(req.body["time-1"], req.body["time-2"]);
    const maxTime = Math.max(req.body["time-1"], req.body["time-2"]);

    session.setGoal(selectedGoal);
    session.setMuscles(selectedMuscles);
    session.setMinTime(minTime);
    session.setMaxTime(maxTime);

    // res.sendFile(__public + "/html/session.html");
  }

  else if (req.body.btn == "workoutsList") {

    res.render(__public + "/views/workoutslist", {workoutsList: workoutsList});
    // res.redirect(__public + "/views/workoutslist");
    // res.redirect(__public + "/views/workoutslist", {workoutsList: workoutsList});
  }

  // const session = new Session(selectedGoal, selectedMuscles, minTime, maxTime);


});

app.get("/workoutslist", function(req, res) {
  res.render(__public + "/views/workoutslist", {workoutsList: workoutsList});
});

app.post("/workoutslist", function(req, res) {
  res.end()
  // res.render(__public + "/views/index");
  // res.redirect(__public + "/views/index");
});

app.get("/session", function(req, res) {
  res.sendFile(__public + "/html/session.html");
});

app.post("/session", function(req, res) {
  res.sendFile(__public + "/html/index.html");
});

app.listen(3000, function() {
  console.log("Server started on port 3000.")
});

export {session};
