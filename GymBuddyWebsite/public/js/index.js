// ***SINGLETON PATTERN SOLUTION***
// import {Session} from "./sessionclass.js";

// ***SINGLETON PATTERN SOLUTION***
// const session = Session.instance();

if (window.location.pathname == "/") {

  const selectGoal = document.getElementById("select-goal");
  const selectMuscles = document.getElementById("select-muscles");
  const inputTime1 = document.getElementById("input-time-1");
  const inputTime2 = document.getElementById("input-time-2");

  var selectedGoal;
  const selectedMuscles = [];
  var minTime = 0;
  var maxTime = 0;

  const groupDelts = document.getElementById("group-shoulders");
  const groupArms = document.getElementById("group-arms");
  const groupLegs = document.getElementById("group-legs");
  const groupBack = document.getElementById("group-back");

  const muscleGroups = document.getElementsByClassName("group");

  selectMuscles.addEventListener("mouseover", function() {
    selectMuscles.style.height = "300px";
    selectMuscles.style.marginBottom = "-300px";
    groupArms.label = "Arms";
  });

  selectMuscles.addEventListener("mouseout", function() {
    selectMuscles.style.height = "18.8px";
    groupArms.label = "Muscles";
  });

  // Used in the following event listener to check if all options are selected
  const allEqual = arr => arr.every(val => val === arr[0]);

  // Event listener for clicking a group of muscles
  for (let i = 0; i < muscleGroups.length; i ++) {
    muscleGroups[i].addEventListener("click", function() {

        if (event.target == muscleGroups[i]) {
          const array = [];
          for (let k = 0; k < muscleGroups[i].children.length; k ++) {
          array.push(muscleGroups[i].children[k].selected);
          }

          if (allEqual(array)) {
            for (let j = 0; j < muscleGroups[i].children.length; j ++) {
              muscleGroups[i].children[j].selected = !muscleGroups[i].children[j].selected;
            }
          }
          else {
            for (let j = 0; j < muscleGroups[i].children.length; j ++) {
              muscleGroups[i].children[j].selected = false;
            }
          }
        }
      });
  }

  // Workouts list button
  document.getElementById("btn-to-workouts-list").addEventListener("click", function() {
    location.href = "workoutslist";
  });

  // Generate session button
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

      // ***LOCALSTORAGE SOLUTION***
      // Storing this data becuase exports have to be top-level
      localStorage.setItem("sessionGoal", selectedGoal);
      // Local storage is only for Strings. The selectedMuscles array has to be converted to a String.
      localStorage.setItem("sessionMuscles", selectedMuscles.join(" "));
      localStorage.setItem("minTime", minTime);
      localStorage.setItem("maxTime", maxTime);

      //***SINGLETON PATTERN SOLUTION***
      // session.setGoal(selectedGoal);
      // session.setMuscles(selectedMuscles);
      // session.setMinTime(minTime);
      // session.setMaxTime(maxTime);
      // console.log(Session.instance());

      // Opens session page
      location.href = "session";
    }
    else {
      alert("Please fill out all forms!");
    }
  });

}

// ***SINGLETON PATTERN SOLUTION
// export {session};
