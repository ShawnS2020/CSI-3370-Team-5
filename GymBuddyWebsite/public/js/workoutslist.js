import {Workout} from "./workoutclass.js";
// const Workout = require(__dirname + "/workoutclass.js");

// Instantiating Workout objects
const workout1 = new Workout("Bicep curls", "Curl your biceps", ["Biceps"]);
const workout2 = new Workout("Tricep extensions", "Extend your triceps", ["Triceps"]);
const workout3 = new Workout("Bench press", "Press with your chest", ["Chest", "triceps", "front delts"]);
const workout4 = new Workout("Push-ups", "Push the floor", ["Chest", "triceps", "front delts", "core"]);
const workout5 = new Workout("Chin-ups", "Chin to the bar. Reverse grip", ["Biceps", "Upper back"]);
const workout6 = new Workout("Pull-ups", "Chin to the bar. Forward grip", ["Biceps", "Upper back"]);
const workout7 = new Workout("Deadlifts", "Pick up dat bar", ["Core", "glutes", "hamstrings", "lower back", "upper back"]);
const workout8 = new Workout("Lat pulldowns", "Pulldown dat bar", ["Biceps", "rear delts", "upper back"]);
const workout9 = new Workout("Rows", "Row however you row", ["Biceps", "rear delts", "lower back", "upper back"]);
const workout10 = new Workout("Squats", "Squat dat bar", ["Core", "glutes", "quads"]);
const workout11 = new Workout("Overhead press", "Raise dat bar", ["Chest", "triceps", "rear delts", "upper delts"]);
const workout12 = new Workout("Calf raises", "Moooo", ["Calves"]);
const workout13 = new Workout("Shrugs", "Shrug your shoulders", ["Upper back"]);

// Array of all workout objects
const workoutsList = [workout1, workout2, workout3, workout4, workout5, workout6, workout7, workout8, workout9, workout10, workout11, workout12];

// function init() {
  // console.log(document);

if (typeof window !== "undefined") {
  // location.href = "workoutslist";

// if (window.location.pathname == "/workoutslist") {

  // Button sends you back to home screen
  // document.getElementById("btn-back-nopost").addEventListener("click", function() {
  //     location.href = "/";
  // });

    // Populating workoutslist.html with data
    // for (let i = 0; i < workoutsList.length; i ++) {
      // Creating html elements for each data
      // const div = document.createElement("div");
      // const h1 = document.createElement("h1");
      // const pDesc = document.createElement("p");
      // const pMusc = document.createElement("p");

      // Populating html elements with data
      // h1.innerHTML = workoutsList[i].getName();
      // pDesc.innerHTML = workoutsList[i].getDescription();
      // pMusc.innerHTML = workoutsList[i].getMuscles().join(", ");

      // Appending html elements in workoutslist.html
      // document.getElementById("main").append(div);
      // div.append(h1, pDesc, pMusc);

      // Adding css class
      // div.classList.add("div-workout");
    // }
}

// module.exports = workoutsList;
export {workoutsList};
// export {workoutsList, init};
