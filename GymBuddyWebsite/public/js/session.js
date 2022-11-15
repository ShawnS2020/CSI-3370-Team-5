import {workout1, workout2, workout3} from "./workoutslist.js";
import {Session} from "./sessionclass.js";

const session = new Session("Strength", "Triceps", 19, 50);

if (window.location.pathname == "/session") {

  document.getElementById("btn-quit").addEventListener("click", function() {
    location.href = "/";
  });

  session.setWorkoutsCount(session.getMinTime(), session.getMaxTime());
  session.getSessionWorkout1().appendName(document.getElementById("h2-workouts"));


}
