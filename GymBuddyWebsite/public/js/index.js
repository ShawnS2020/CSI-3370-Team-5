if (window.location.pathname == "/") {

  const selectGoal = document.getElementById("select-goal");
  const selectMuscles = document.getElementById("select-muscles");
  const inputTime1 = document.getElementById("input-time-1");
  const inputTime2 = document.getElementById("input-time-2");

  var selectedGoal = "";
  const selectedMuscles = [];
  var minTime = 0;
  var maxTime = 0;

  // Workouts list button
  document.getElementById("btn-to-workout-list").addEventListener("click", function() {
    location.href = "workoutslist";
  });

  // Generate button
  document.getElementById("btn-generate").addEventListener("click", function() {
    // Checks if all forms all filled
    if (selectGoal.checkValidity() && selectMuscles.checkValidity() && inputTime1.checkValidity() && inputTime2.checkValidity()) {
      // Declaring and assigning form data to constants
      selectedGoal = selectGoal.options[selectGoal.selectedIndex].value;
      minTime = Math.min(inputTime1.value, inputTime2.value);
      maxTime = Math.max(inputTime1.value, inputTime2.value);

      // Loops through all muscle options and adds the selected options to the array
      for (let i = 0; i < selectMuscles.options.length; i++) {
        if (selectMuscles.options[i].selected){
          selectedMuscles.push(selectMuscles.options[i].value);
        }
      }

      // const session = new Session(selectedGoal, selectedMuscles, minTime, maxTime);
      // Opens session page
      location.href = "session";
    }
    else {
      alert("Please fill out all forms!");
    }
  });

}
