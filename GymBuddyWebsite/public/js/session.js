import {Session} from "./sessionclass.js";

// Getting form data from localStorage
const selectedGoal = localStorage.getItem("selectedGoal");
const selectedMuscles = localStorage.getItem("selectedMuscles");
const minTime = localStorage.getItem("minTime");
const maxTime = localStorage.getItem("maxTime");

// Declaring variables that will be used to populate html elements
// Will be assigned to data from localStorage if a session already exists or new data if not
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
if (localStorage.getItem("sessionWorkoutsCount") !== null) {
  sessionWorkoutsCount = localStorage.getItem("sessionWorkoutsCount");
  sessionWorkoutsNames = localStorage.getItem("sessionWorkoutsNames").split(",");
  sessionWorkoutsSetCounts = localStorage.getItem("sessionWorkoutsSetCounts").split(",");
  sessionRepRange = localStorage.getItem("sessionRepRange");

  console.log("Restored an old session.");
}
else {
  session.randomizeSession(session.getGoal(), session.getMuscles(), session.getMinTime(), session.getMaxTime());
  console.log("Randomized a new session.");

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

  // Storing data in localStorage in case user quits session and wants to restore it
  localStorage.setItem("sessionWorkoutsCount", sessionWorkoutsCount);
  localStorage.setItem("sessionWorkoutsNames", sessionWorkoutsNames);
  localStorage.setItem("sessionWorkoutsSetCounts", sessionWorkoutsSetCounts);
  localStorage.setItem("sessionRepRange", sessionRepRange);
}
// End of "if-else" statement

// Creating html and populating with data
for (let i = 0; i < sessionWorkoutsCount; i ++) {
  document.getElementById("h2-workouts").append(sessionWorkoutsNames[i],
    document.createElement("br"),
    sessionWorkoutsSetCounts[i], " sets",
    document.createElement("br"),
    sessionRepRange,
    document.createElement("br"),
    document.createElement("br"));
}
