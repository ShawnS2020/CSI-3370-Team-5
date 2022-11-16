import {arrayWorkoutsList, arrayTricepsWorkouts} from "./workoutslist.js";

// This link has good notes on rep/set/workout counts for each goal
// https://vitalrecord.tamhsc.edu/how-to-exercise-for-muscular-strength-endurance-and-size/

class Session {

  #goal;
  #muscles;
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

  setSessionWorkouts(muscles) {
    this.setWorkoutsCount(this.#minTime, this.#maxTime);
    const tempArray = arrayTricepsWorkouts;


    for (let i = 0; i < this.#workoutsCount; i ++) {
      switch (muscles.toLowerCase()) {
        case "biceps":
        //
        break;

        case "triceps":
        const randomTricepsWorkout = tempArray[Math.floor(Math.random() * arrayTricepsWorkouts.length)];
        this.#sessionWorkouts.push(randomTricepsWorkout);
        tempArray.splice(tempArray.indexOf(randomTricepsWorkout), 1);
        break;

        case "chest":
        //
        break;
      }
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

  // Using 10 mins as everage workout time
  setWorkoutsCount(minTime, maxTime) {
    // Round minTime and maxTime divided by 10 mins
    const minTimeRounded = Math.floor(minTime / 10);
    const maxTimeRounded = Math.floor(maxTime / 10);

    // Generate a random number from minTimeRounded to maxTimeRounded
    this.#workoutsCount = Math.floor(Math.random() * (maxTimeRounded - minTimeRounded + 1)) + minTimeRounded;

  }
}

export {Session};
