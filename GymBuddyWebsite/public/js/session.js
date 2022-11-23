// ***LOCALSTORAGE SOLUTION***
// import {Session} from "./sessionclass.js";

// ***SINGLETON PATTERN SOLUTION***
// import {session} from "./index.js";

import {session} from "./server.js";

console.log("session runnin");

const sessionGoal = localStorage.getItem("sessionGoal");
const sessionMuscles = localStorage.getItem("sessionMuscles");
const sessionMinTime = localStorage.getItem("minTime");
const sessionMaxTime = localStorage.getItem("maxTime");

// Instantiating Session object with data from local storage. sessionMuscles is converted back to an array.
// ***LOCALSTORAGE SOLUTION***
// const session = new Session(sessionGoal, sessionMuscles.split(" "), sessionMinTime, sessionMaxTime);

if (typeof window !== "undefined") {
  location.href = "session";
  alert("session runnin");
  console.log(session.getGoal());

  document.getElementById("btn-quit").addEventListener("click", function() {
    location.href = "/";
  });

  // setSessionWorkouts
  session.setSessionWorkouts(session.getMuscles(), session.getMinTime(), session.getMaxTime());
  // setRepCount
  session.setRepCount(session.getGoal());

  // Loops through each workout in the session and
  // sets the set count for each and
  // adds data from each workout to session.html
  for (let i = 0; i < session.getSessionWorkouts().length; i ++) {
    // setSetCount
    session.getSessionWorkouts()[i].setSetCount(session.getGoal());

    document.getElementById("h2-workouts").append(session.getSessionWorkouts()[i].getName(),
      document.createElement("br"),
      session.getSessionWorkouts()[i].getSetCount(), " sets",
      document.createElement("br"),
      session.getRepCount(),
      document.createElement("br"),);
    document.getElementById("h2-workouts").append(document.createElement("br"));
  }
}

export {session};
