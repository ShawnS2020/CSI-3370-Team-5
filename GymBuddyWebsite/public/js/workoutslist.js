import {Workout} from "./workoutclass.js";
import {AppendElement} from "./appendelementclass.js";

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
    AppendElement.appendElement(workout1.getName(), document.getElementById("h1-workout1Name"));
    AppendElement.appendElement(workout1.getDescription(), document.getElementById("p-workout1Description"));
    AppendElement.appendElement(workout1.getMuscles(), document.getElementById("p-workout1Muscles"));

    // Workout 2
    AppendElement.appendElement(workout2.getName(), document.getElementById("h1-workout2Name"));
    AppendElement.appendElement(workout2.getDescription(), document.getElementById("p-workout2Description"));
    AppendElement.appendElement(workout2.getMuscles(), document.getElementById("p-workout2Muscles"));

    // Workout 3
    AppendElement.appendElement(workout3.getName(), document.getElementById("h1-workout3Name"));
    AppendElement.appendElement(workout3.getDescription(), document.getElementById("p-workout3Description"));
    AppendElement.appendElement(workout3.getMuscles(), document.getElementById("p-workout3Muscles"));
}

export {arrayWorkoutsList, workout1, workout2, workout3};
