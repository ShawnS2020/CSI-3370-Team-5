import {workoutsList} from "./workoutslist.js";
// const workoutsList = require(__dirname + "/workoutslist.js");

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

  //***SINGLETON PATTERN SOLUTION***
  // Still cannot use singleton because upon loading session.js, this file runs again and sets #uniqueInstance to null;
  // static #uniqueInstance = null;
  // static #isInternalConstructing = false;

  //***SINGLETON PATTERN SOLUTION***
  // There are no private constructors is JS
  // Private construction can still be accomplished using a private static flag
  // constructor (goal, muscles, minTime, maxTime) {
  //   if (!Session.#isInternalConstructing) {
  //     throw new TypeError("PrivateConstructor is not constructable");
  //   }
  //   this.#goal = goal;
  //   this.#muscles = muscles;
  //   this.#minTime = minTime;
  //   this.#maxTime = maxTime;
  // }

  constructor(goal, muscles, minTime, maxTime) {
    this.#goal = goal;
    this.#muscles = muscles;
    this.#minTime = minTime;
    this.#maxTime = maxTime;
  }

  //***SINGLETON PATTERN SOLUTION***
  // static instance() {
  //   if (Session.#uniqueInstance == null) {
  //     console.log(Session.#uniqueInstance);
  //     Session.#isInternalConstructing = true;
  //     Session.#uniqueInstance = new Session();
  //     Session.#isInternalConstructing = false;
  //   }
  //   return Session.#uniqueInstance;
  // }

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

  getRepCount() {
    return this.#repCount;
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

}

// exports = Session;
export {Session};
