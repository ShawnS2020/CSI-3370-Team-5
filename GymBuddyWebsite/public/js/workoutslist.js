import {Workout} from "./workoutclass.js";

// Instantiating Workout objects
const workout1 = new Workout("Bicep curls", "Curl your biceps", "Biceps", 2);
const workout2 = new Workout("Tricep extensions", "Extend your triceps", "Triceps", 3);
const workout3 = new Workout("Bench press", "Press with your chest", "Chest, triceps, front delts", 4);

const arrayWorkoutsList = [workout1, workout2, workout3];

if (window.location.pathname == "/workoutslist") {

  // Button sends you back to home screen
  document.getElementById("btn-back").addEventListener("click", function() {
      location.href = "/";
    });

    // Appending name, description, and muscles to preexisting html elements in workoutlist.html
    // Workout 1
    workout1.appendName(document.getElementById("h1-workout1Name"));
    workout1.appendDescription(document.getElementById("p-workout1Description"));
    workout1.appendMuscles(document.getElementById("p-workout1Muscles"));

    // Workout 2
    workout2.appendName(document.getElementById("h1-workout2Name"));
    workout2.appendDescription(document.getElementById("p-workout2Description"));
    workout2.appendMuscles(document.getElementById("p-workout2Muscles"));

    // Workout 3
    workout3.appendName(document.getElementById("h1-workout3Name"));
    workout3.appendDescription(document.getElementById("p-workout3Description"));
    workout3.appendMuscles(document.getElementById("p-workout3Muscles"));
}

export {arrayWorkoutsList, workout1, workout2, workout3};
