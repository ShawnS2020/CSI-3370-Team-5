if (window.location.pathname == "/") {

  document.getElementById("btn-to-workout-list").addEventListener("click", function() {
    location.href = "workoutslist";
  });

  document.getElementById("btn-generate").addEventListener("click", function() {
    location.href = "session";
  });

}
