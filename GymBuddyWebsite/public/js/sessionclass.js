import {arrayWorkoutsList, workout1, workout2, workout3} from "./workoutslist.js";

// This link has good notes on rep/set/workout counts for each goal
// https://vitalrecord.tamhsc.edu/how-to-exercise-for-muscular-strength-endurance-and-size/

class Session {

  #goal;
  #muscles;
  #minTime;
  #maxTime;
  #workoutsCount;
  #setCount;
  #repCount
  #sessionWorkout1;
  #sessionWorkouts = [];

  constructor(goal, muscles, minTime, maxTime) {
    this.#goal = goal;
    this.#muscles = muscles;
    this.#minTime = minTime;
    this.#maxTime = maxTime;

    this.#sessionWorkout1 = this.generateWorkouts();
  }

  // Strength: 4-6 sets
  // Hypertrophy: 3-5 sets
  // Endurance: 2-3 sets
  setCount() {
    switch (this.#goal.toLowerCase()) {
      case "Strength":
      // Code here
      break;
      case "Hypertrophy":
      // Code here
      break;
      case "Endurance":
      // Code here
      break;
    }
  }

  // Strength:
  // Hypertrophy:
  // Endurance:
  repCount() {
    switch (this.#goal.toLowerCase()) {
      case "Strength":
      // Code here
      break;
      case "Hypertrophy":
      // Code here
      break;
      case "Endurance":
      // Code here
      break;
    }
  }

  generateWorkouts() {
    // Instantiate regular expression objects with a string pattern corresponding to each muscle
    // These will be used to create arrays for workouts with similar muscles
    const bicepsRegExp = new RegExp(/biceps/);
    const tricepsRegExp = new RegExp(/triceps/);
    const chestRegExp = new RegExp(/chest/);

    // Switch statement to check which muscles were selected
    // Each case creates an array of workout objects with corresponding muscle data
    // Then returns a random workout object from the array
    switch (this.#muscles.toLowerCase()) {

      case "biceps":
      const arrayBicepsWorkouts = new Array();
      for (let i = 0; i < arrayWorkoutsList.length; i ++ ) {
        if (bicepsRegExp.test(arrayWorkoutsList[i].getMuscles().toLowerCase())) {
          arrayBicepsWorkouts.push(arrayWorkoutsList[i]);
        }
      }
      const randomBicepsWorkout = arrayBicepsWorkouts[Math.floor(Math.random() * arrayBicepsWorkouts.length)];
      return randomBicepsWorkout;
      break;

      case "triceps":
      const arrayTricepsWorkouts = new Array();
      for (let i = 0; i < arrayWorkoutsList.length; i ++ ) {
        if (tricepsRegExp.test(arrayWorkoutsList[i].getMuscles().toLowerCase())) {
          arrayTricepsWorkouts.push(arrayWorkoutsList[i]);
        }
      }
      const randomTricepsWorkout = arrayTricepsWorkouts[Math.floor(Math.random() * arrayTricepsWorkouts.length)];
      return randomTricepsWorkout;
      break;

      case "chest":
      const arrayChestWorkouts = new Array();
      for (let i = 0; i < arrayWorkoutsList.length; i ++ ) {
        if (chestRegExp.test(arrayWorkoutsList[i].getMuscles().toLowerCase())) {
          arrayChestWorkouts.push(arrayWorkoutsList[i]);
        }
      }
      const randomChestWorkout = arrayChestWorkouts[Math.floor(Math.random() * arrayChestWorkouts.length)];
      return randomChestWorkout;
      break;
    }
  }

  // Will replace with getSessionWorkouts
  getSessionWorkout1() {
    return this.#sessionWorkout1;
  }

  setSessionWorkouts() {
    // For workoutsCount, generate a workout
  }

  getGoal() {
    return this.#goal;
  }

  getMuscles() {
    return this.#muscles;
  }

  getMinTime() {
    return this.#minTime;
  }

  getMaxTime() {
    return this.#maxTime;
  }

  getWorkoutsCount() {
    return this.#workoutsCount;
  }

  // Using 10 mins as everage workout time
  setWorkoutsCount(minTime, maxTime) {
    // Round minTime and maxTime to the nearest 10 mins
    const minTimeRounded = Math.floor(minTime / 10);
    const maxTimeRounded = Math.floor(maxTime / 10);

    // Generate a random number from minTimeRounded to maxTimeRounded
    this.#workoutsCount = Math.floor((Math.random() * maxTimeRounded) + minTimeRounded);
  }
}

export {Session};
