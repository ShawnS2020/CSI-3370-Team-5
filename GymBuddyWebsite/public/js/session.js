import {Session} from "./sessionclass.js";

// Checks if a session already exists
// Restores session if one does exist
// Creates new session if not
if (localStorage.getItem("sessionWorkoutsNames") !== null) {
  const sessionWorkoutsCount = localStorage.getItem("sessionWorkoutsCount");
  const sessionWorkoutsNames = localStorage.getItem("sessionWorkoutsNames").split(",");
  const sessionWorkoutsSetCounts = localStorage.getItem("sessionWorkoutsSetCounts").split(",");
  const sessionRepRange = localStorage.getItem("sessionRepRange");
  for (let i = 0; i < sessionWorkoutsCount; i ++) {
    document.getElementById("h2-workouts").append(sessionWorkoutsNames[i],
      document.createElement("br"),
      sessionWorkoutsSetCounts[i], " sets",
      document.createElement("br"),
      sessionRepRange,
      document.createElement("br"),
      document.createElement("br"));
  }

  console.log(sessionWorkoutsCount);
}
else {
  const selectedGoal = localStorage.getItem("selectedGoal");
  const selectedMuscles = localStorage.getItem("selectedMuscles");
  const minTime = localStorage.getItem("minTime");
  const maxTime = localStorage.getItem("maxTime");
  const session = new Session(selectedGoal, selectedMuscles.split(","), minTime, maxTime);

  // setSessionWorkouts
  session.setSessionWorkouts(session.getMuscles(), session.getMinTime(), session.getMaxTime());
  // setRepCount
  session.setRepCount(session.getGoal());

  const sessionWorkoutsCount = session.getWorkoutsCount();
  const sessionWorkoutsNames = [];
  const sessionWorkoutsSetCounts = [];
  const sessionRepRange = session.getRepCount();

  // Loops through each workout in the session and
  // sets the set count for each and
  // adds data from each workout to session.html
  for (let i = 0; i < session.getSessionWorkouts().length; i ++) {
    // setSetCount
    session.getSessionWorkouts()[i].setSetCount(session.getGoal());

    sessionWorkoutsNames.push(session.getSessionWorkouts()[i].getName());
    sessionWorkoutsSetCounts.push(session.getSessionWorkouts()[i].getSetCount());

    document.getElementById("h2-workouts").append(session.getSessionWorkouts()[i].getName(),
      document.createElement("br"),
      session.getSessionWorkouts()[i].getSetCount(), " sets",
      document.createElement("br"),
      session.getRepCount(),
      document.createElement("br"),);
    document.getElementById("h2-workouts").append(document.createElement("br"));
  }

  localStorage.setItem("sessionWorkoutsCount", sessionWorkoutsCount);
  localStorage.setItem("sessionWorkoutsNames", sessionWorkoutsNames);
  localStorage.setItem("sessionWorkoutsSetCounts", sessionWorkoutsSetCounts);
  localStorage.setItem("sessionRepRange", sessionRepRange);
}

// const session = Session.instance();
// session.setGoal(selectedGoal);
// session.setMuscles(selectedMuscles.split(" "));
// session.setMinTime(minTime);
// session.setMaxTime(maxTime);

// Instantiating Session with data from local storage
// ***LOCALSTORAGE SOLUTION***
// const session = new Session(selectedGoal, selectedMuscles.split(" "), minTime, maxTime);


// // setSessionWorkouts
// session.setSessionWorkouts(session.getMuscles(), session.getMinTime(), session.getMaxTime());
// // setRepCount
// session.setRepCount(session.getGoal());
//
// sessionWorkoutsCount = session.getSessionWorkouts().length;
// const sessionWorkoutsNames = [];
// const sessionWorkoutsSetCounts = [];
// const sessionRepRange = session.getRepCount();
//
// // Loops through each workout in the session and
// // sets the set count for each and
// // adds data from each workout to session.html
// for (let i = 0; i < session.getSessionWorkouts().length; i ++) {
//   // setSetCount
//   session.getSessionWorkouts()[i].setSetCount(session.getGoal());
//
//   sessionWorkoutsNames.push(session.getSessionWorkouts()[i].getName());
//   sessionWorkoutsSetCounts.push(session.getSessionWorkouts()[i].getSetCount());
//
//   // document.getElementById("h2-workouts").append(session.getSessionWorkouts()[i].getName(),
//   //   document.createElement("br"),
//   //   session.getSessionWorkouts()[i].getSetCount(), " sets",
//   //   document.createElement("br"),
//   //   session.getRepCount(),
//   //   document.createElement("br"),);
//   // document.getElementById("h2-workouts").append(document.createElement("br"));
// }
//
// localStorage.setItem("sessionWorkoutsCount", sessionWorkoutsCount);
// localStorage.setItem("sessionWorkoutsNames", sessionWorkoutsNames);
// localStorage.setItem("sessionWorkoutsSetCounts", sessionWorkoutsSetCounts);
// localStorage.setItem("sessionRepRange", sessionRepRange);
