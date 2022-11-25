import {Session} from "./sessionclass.js";

if (localStorage.getItem("sessionWorkoutsNames") !== null) {
  const btnReturn = document.createElement("button");
  btnReturn.innerHTML = "Return to session";
  btnReturn.setAttribute("id", "btn-return");
  btnReturn.setAttribute("type", "submit");

  document.getElementById("form").append(btnReturn);

  document.getElementById("btn-return").addEventListener("click", function() {
    inputNaN();
    storeData();
  });
}

// Declaring constants for each form object
const selectGoal = document.getElementById("select-goal");
const selectMuscles = document.getElementById("select-muscles");
const inputTime1 = document.getElementById("input-time-1");
const inputTime2 = document.getElementById("input-time-2");

// Declaring constants for each group object in the muscles form
// And declaring a constant for an HTMLCollection (array-like object) of all groups
const groupDelts = document.getElementById("group-shoulders");
const groupArms = document.getElementById("group-arms");
const groupLegs = document.getElementById("group-legs");
const groupBack = document.getElementById("group-back");
const muscleGroups = document.getElementsByClassName("group");



// The following four "if" statements restore the forms using previous data stored in localStorage if user refreshes page
// Restores goal form
if (localStorage.getItem("selectedGoalIndex") !== null) {
  const selectedGoalIndex = localStorage.getItem("selectedGoalIndex");
  selectGoal[selectedGoalIndex].selected = true;
}

// Restores muscles form
if (localStorage.getItem("selectedMusclesIndices") !== null) {
  const selectedMusclesIndices = localStorage.getItem("selectedMusclesIndices").split(" ");
  if (selectedMusclesIndices[0] !== "") {
    for (let i = 0; i < selectedMusclesIndices.length; i ++) {
      selectMuscles[selectedMusclesIndices[i]].selected = true;
    }
  }
}

// Restores first time input form
if (localStorage.getItem("inputTime1") !== "") {
  const time1 = localStorage.getItem("time1");
  inputTime1.value = time1;
}

// Restores second time input form
if (localStorage.getItem("inputTime2") !== "") {
  const time2 = localStorage.getItem("time2");
  inputTime2.value = time2;
}



// Functions that expand/retract muscles form
selectMuscles.addEventListener("mouseover", function() {
  selectMuscles.style.height = "300px";
  selectMuscles.style.marginBottom = "-300px";
  groupArms.label = "Arms";
});

selectMuscles.addEventListener("mouseout", function() {
  selectMuscles.style.height = "18.8px";
  groupArms.label = "Muscles";
});

// Used in the following event listener to check if all options of a group are selected
const allEqual = arr => arr.every(val => val === arr[0]);

// Function for selecting a group of muscles by clicking the group name
for (let i = 0; i < muscleGroups.length; i ++) {
  muscleGroups[i].addEventListener("click", function() {
    if (event.target == muscleGroups[i]) {
      const array = [];
      for (let j = 0; j < muscleGroups[i].children.length; j ++) {
      array.push(muscleGroups[i].children[j].selected);
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

// Saves data from forms in localStorage for the purpose of (1) refilling forms with previous data on refresh and (2) creating session object
// Called when any button is clicked
function storeData() {
  // Storing data for restoring forms
  const selectedGoalIndex = selectGoal.selectedIndex;
  const selectedMusclesIndices = [];
  const time1 = inputTime1.value;
  const time2 = inputTime2.value;

  for (let i = 0; i < selectMuscles.length; i ++) {
    if (selectMuscles[i].selected) {
      selectedMusclesIndices.push(i)
    }
  }

  localStorage.setItem("selectedGoalIndex", selectedGoalIndex);
  localStorage.setItem("selectedMusclesIndices", selectedMusclesIndices.join(" "));
  localStorage.setItem("time1", time1);
  localStorage.setItem("time2", time2);

  // Storing data for instantiating Session
  const selectedGoal = selectGoal.options[selectGoal.selectedIndex].value;
  const selectedMuscles = [];
  const minTime = Math.min(time1, time2);
  const maxTime = Math.max(time1, time2);

  for (let i = 0; i < selectMuscles.length; i ++) {
    if (selectMuscles[i].selected) {
      selectedMuscles.push(selectMuscles[i].value);
    }
  }

  localStorage.setItem("selectedGoal", selectedGoal);
  localStorage.setItem("selectedMuscles", selectedMuscles);
  localStorage.setItem("minTime", minTime);
  localStorage.setItem("maxTime", maxTime);
}

// Checks is time inputs are numbers and clears forms if not
// Called in the "Generate" and "Return to session" buttons
function inputNaN() {
  if (isNaN(inputTime1.value)) {
    alert("Please enter a number for your time range");
    inputTime1.value = "";
  }

  if (isNaN(inputTime2.value)) {
    alert("Please enter a number for your time range");
    inputTime2.value = "";
  }
}

// Workouts list button
// Removes required attribute so user can bypass forms and get to workouts list
// Calls storeData() function
// ***FYI URL redirects are handled server-side in server.js***
document.getElementById("btn-to-workouts-list").addEventListener("click", function() {
  selectGoal.removeAttribute("required");
  selectMuscles.removeAttribute("required");
  inputTime1.removeAttribute("required");
  inputTime2.removeAttribute("required");

  storeData();
});

// Generate session button
// Removing localStorage to make sure a new Session is instantiated if one already exists
// ***FYI URL redirects are handled server-side in server.js***
document.getElementById("btn-generate").addEventListener("click", function() {
  inputNaN();
  storeData();
  localStorage.removeItem("sessionWorkoutsCount");
});
