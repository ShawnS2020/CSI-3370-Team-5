import {Session} from "./sessionclass.js";

// Getting form data from sessionStorage
const selectedGoal = sessionStorage.getItem("selectedGoal");
const selectedMuscles = sessionStorage.getItem("selectedMuscles");
const minTime = Math.min(sessionStorage.getItem("time1"), sessionStorage.getItem("time2"));
const maxTime = Math.max(sessionStorage.getItem("time1"), sessionStorage.getItem("time2"));

// Declaring variables that will be used to populate html elements
// Will be assigned to data from sessionStorage if a session already exists or new data if not
let sessionWorkoutsCount;
let sessionWorkoutsNames;
let sessionWorkoutsSetCounts;
let sessionRepRange;

// Instantiating Session only assigns user data from forms
// Workouts will be randomized in the "else" statement
const session = new Session(selectedGoal, selectedMuscles.split(","), minTime, maxTime);



// Checks if a session already exists
// Assigns variables to data from previous session if one exists
// Creates new session if not
if (sessionStorage.getItem("sessionWorkoutsCount") !== null) {
  sessionWorkoutsCount = sessionStorage.getItem("sessionWorkoutsCount");
  sessionWorkoutsNames = sessionStorage.getItem("sessionWorkoutsNames").split(",");
  sessionWorkoutsSetCounts = sessionStorage.getItem("sessionWorkoutsSetCounts").split(",");
  sessionRepRange = sessionStorage.getItem("sessionRepRange");
}
else {
  session.randomizeSession(session.getGoal(), session.getMuscles(), session.getMinTime(), session.getMaxTime());

  // Assigning variables using new Session object
  sessionWorkoutsCount = session.getWorkoutsCount();
  sessionWorkoutsNames = [];
  sessionWorkoutsSetCounts = [];
  sessionRepRange = session.getRepRange();

  // Adding data to arrays
  for (let i = 0; i < sessionWorkoutsCount; i ++) {
    sessionWorkoutsNames.push(session.getSessionWorkouts()[i].getName());
    sessionWorkoutsSetCounts.push(session.getSessionWorkouts()[i].getSetCount());
  }

  // Storing data in sessionStorage in case user quits session and wants to restore it
  sessionStorage.setItem("sessionWorkoutsCount", sessionWorkoutsCount);
  sessionStorage.setItem("sessionWorkoutsNames", sessionWorkoutsNames);
  sessionStorage.setItem("sessionWorkoutsSetCounts", sessionWorkoutsSetCounts);
  sessionStorage.setItem("sessionRepRange", sessionRepRange);
}
// End of "if-else" statement

// Creating html and populating with data
const div = document.getElementById("div-session-workouts");

for (let i = 0; i < sessionWorkoutsCount; i ++) {
  const workoutName = document.createElement("h1");
  const workoutSets = document.createElement("h2");
  const workoutReps = document.createElement("h2");
  const br = document.createElement("br");

  workoutName.innerHTML = sessionWorkoutsNames[i];
  workoutSets.innerHTML = sessionWorkoutsSetCounts[i] + " sets";
  workoutReps.innerHTML = sessionRepRange;

  div.append(workoutName, workoutSets, workoutReps, br);
}
Array.from(div.children).forEach(element => element.classList.add("h2-workouts"));
