import {workoutsList} from "./workoutslist.js";

// This link has good notes on rep/set/workout counts for each goal
// https://vitalrecord.tamhsc.edu/how-to-exercise-for-muscular-strength-endurance-and-size/

class Session {

  #goal;
  #muscles = [];
  #minTime;
  #maxTime;
  #workoutsCount;
  #sessionWorkouts = [];
  #repCount;

  constructor(goal, muscles, minTime, maxTime) {
    this.#goal = goal;
    this.#muscles = muscles;
    this.#minTime = minTime;
    this.#maxTime = maxTime;

    // this.#sessionWorkout1 = this.setWorkouts();
  }

  getSessionWorkouts() {
    return this.#sessionWorkouts;
  }

  setSessionWorkouts(muscles, minTime, maxTime) {
    this.setWorkoutsCount(minTime, maxTime)
    const possibleSessionWorkouts = [];

    // Creates an array of possible workouts according to the selected muscles
    for (let i = 0; i < workoutsList.length; i ++) {
      for (let j = 0; j < workoutsList[i].getMuscles().length; j ++) {
        for (let k = 0; k < muscles.length; k ++) {
          if (workoutsList[i].getMuscles()[j].toLowerCase() == muscles[k].toLowerCase()) {
            possibleSessionWorkouts.push(workoutsList[i]);
            k = muscles.length;
            j = workoutsList[i].getMuscles().length;
          }
        }
      }
    }

    //
    for (let i = 0; i < this.#workoutsCount; i++) {
      const randomNum = Math.floor(Math.random() * possibleSessionWorkouts.length);
      this.#sessionWorkouts.push(possibleSessionWorkouts[randomNum]);
      possibleSessionWorkouts.splice(randomNum, 1);
    }
  }

  getRepCount() {
    return this.#repCount;
  }

  // Strength: 1 to 5 reps
  // Hypertrophy: 8 to 12 reps
  // Endurance: 12 to 20+ reps
  setRepCount(goal) {
    switch (goal) {
      case "Strength":
      this.#repCount = "1 to 5 reps each";
      break;

      case "Hypertrophy":
      this.#repCount = "8 to 12 reps each";
      break;

      case "Endurance":
      this.#repCount = "12 to 20+ reps each";
      break;
    }
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

  // Calculates the amount of workouts in your session
  // Using 10 mins as everage workout time
  setWorkoutsCount(minTime, maxTime) {
    // Round minTime and maxTime divided by 10 mins
    const minTimeRounded = Math.floor(minTime / 10);
    const maxTimeRounded = Math.floor(maxTime / 10);

    // Generate a random number from minTimeRounded to maxTimeRounded
    this.#workoutsCount = Math.floor(Math.random() * (maxTimeRounded - minTimeRounded + 1)) + minTimeRounded;
    // Makes it so there will always be at least one workout
    if (this.#workoutsCount == 0) {
      this.#workoutsCount = 1;
    }

  }
}

export {Session};
