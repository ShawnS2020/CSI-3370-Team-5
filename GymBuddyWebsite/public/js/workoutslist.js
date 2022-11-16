import {Workout} from "./workoutclass.js";

// Instantiating Workout objects
const workout1 = new Workout("Bicep curls", "Curl your biceps", "Biceps");
const workout2 = new Workout("Tricep extensions", "Extend your triceps", "Triceps");
const workout3 = new Workout("Bench press", "Press with your chest", "Chest, triceps, front delts");
const workout4 = new Workout("Push-ups", "Push the floor", "Chest, triceps, front delts, core")

// Array of all workout objects
const arrayWorkoutsList = [workout1, workout2, workout3, workout4];

// Array of all triceps workout objects
const arrayTricepsWorkouts = [];
const tricepsRegExp = new RegExp(/triceps/);
for (let i = 0; i < arrayWorkoutsList.length; i ++) {
  if (tricepsRegExp.test(arrayWorkoutsList[i].getMuscles().toLowerCase())) {
    arrayTricepsWorkouts.push(arrayWorkoutsList[i]);
  }
}



if (window.location.pathname == "/workoutslist") {

  // Button sends you back to home screen
  document.getElementById("btn-back").addEventListener("click", function() {
      location.href = "/";
    });

    // Populating workoutslist.html with data
    // Workout 1
    document.getElementById("h1-workout1Name").innerHTML = arrayWorkoutsList[0].getName();
    document.getElementById("p-workout1Description").innerHTML = arrayWorkoutsList[0].getDescription();
    document.getElementById("p-workout1Muscles").innerHTML = arrayWorkoutsList[0].getMuscles();

    // Workout 2
    document.getElementById("h1-workout2Name").innerHTML = arrayWorkoutsList[1].getName();
    document.getElementById("p-workout2Description").innerHTML = arrayWorkoutsList[1].getDescription();
    document.getElementById("p-workout2Muscles").innerHTML = arrayWorkoutsList[1].getMuscles();

    // Workout 3
    document.getElementById("h1-workout3Name").innerHTML = arrayWorkoutsList[2].getName();
    document.getElementById("p-workout3Description").innerHTML = arrayWorkoutsList[2].getDescription();
    document.getElementById("p-workout3Muscles").innerHTML = arrayWorkoutsList[2].getMuscles();
}

export {arrayWorkoutsList, arrayTricepsWorkouts, workout1, workout2, workout3};
