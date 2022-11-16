import {Session} from "./sessionclass.js";

const session = new Session("Strength", "Triceps", 20, 30);

if (window.location.pathname == "/session") {

  document.getElementById("btn-quit").addEventListener("click", function() {
    location.href = "/";
  });

  // setSessionWorkouts
  session.setSessionWorkouts(session.getMuscles());
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
