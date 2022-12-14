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
  #repRange;

  // Constructor only sets user input data because Session objects will be full constructed in "randomizeSession" method
  constructor(goal, muscles, minTime, maxTime) {
    this.#goal = goal;
    this.#muscles = muscles;
    this.#minTime = minTime;
    this.#maxTime = maxTime;
  }

  randomizeSession(goal, muscles, minTime, maxTime) {
    this.randomizeSessionWorkouts(muscles, minTime, maxTime);
    this.setRepRange(goal);
    for (let i = 0; i < this.#workoutsCount; i ++) {
      this.#sessionWorkouts[i].randomizeSetCount(goal);
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

  getSessionWorkouts() {
    return this.#sessionWorkouts;
  }

  getRepRange() {
    return this.#repRange;
  }

  setGoal(g) {
    this.#goal = g;
  }

  setMuscles(m) {
    this.#muscles = m;
  }

  setMinTime(t) {
    this.#minTime = t;
  }

  setMaxTime(t) {
    this.#maxTime = t;
  }

  // Calculates the amount of workouts in your session
  // Using 10 mins as everage workout time
  randomizeWorkoutsCount(minTime, maxTime) {
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

  randomizeSessionWorkouts(muscles, minTime, maxTime) {
    this.randomizeWorkoutsCount(minTime, maxTime)
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

    // Made this because the actual length will change in the for loop
    const length = possibleSessionWorkouts.length;
    // Picks random workout objects from the list of possible workouts
    // And removes each selected workout from this list so there is no repeats
    for (let i = 0; i < this.#workoutsCount && i < length; i++) {
      const randomNum = Math.floor(Math.random() * possibleSessionWorkouts.length);
      this.#sessionWorkouts.push(possibleSessionWorkouts[randomNum]);
      possibleSessionWorkouts.splice(randomNum, 1);
    }
    // workoutsCount may be larger than actual number of workouts generated if user's time input is large enough
    this.#workoutsCount = this.#sessionWorkouts.length;
  }

  // Strength: 1 to 5 reps
  // Hypertrophy: 8 to 12 reps
  // Endurance: 12 to 20+ reps
  setRepRange(goal) {
    switch (goal) {
      case "Strength":
      this.#repRange = "1 to 5 reps each";
      break;

      case "Hypertrophy":
      this.#repRange = "8 to 12 reps each";
      break;

      case "Endurance":
      this.#repRange = "12 to 20+ reps each";
      break;
    }
  }

}

export {Session};
