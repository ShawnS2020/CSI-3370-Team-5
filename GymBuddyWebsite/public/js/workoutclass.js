// import {session} from "./session.js";

class Workout {

  #name;          // Name of the workout
  #description;   // Description of the workout
  #muscles = [];       // Muscles used in the workout
  #setCount;
  // #repCount;

  constructor(name, description, muscles) {
    this.#name = name;
    this.#description = description;
    this.#muscles = muscles;
  }

  getSetCount() {
    return this.#setCount;
  }

  // Strength: 4-6 sets
  // Hypertrophy: 3-5 sets
  // Endurance: 2-3 sets
  setSetCount(goal) {
    switch (goal) {
      case "Strength":
      this.#setCount = Math.floor((Math.random() * (6 - 4 + 1)) + 4);
      break;

      case "Hypertrophy":
      this.#setCount = Math.floor((Math.random() * (5 - 3 + 1)) + 3);
      break;

      case "Endurance":
      this.#setCount = Math.floor((Math.random() * (3 - 2 + 1)) + 2);
      break;
    }
  }

  // getRepCount() {
  //   return this.#repCount;
  // }
  //
  // // Strength: 1 to 5 reps
  // // Hypertrophy: 8 to 12 reps
  // // Endurance: 12 to 20+ reps
  // setRepCount(goal) {
  //   switch (goal) {
  //     case "Strength":
  //     this.#repCount = "1 to 5 reps each";
  //     break;
  //
  //     case "Hypertrophy":
  //     this.#repCount = "8 to 12 reps each";
  //     break;
  //
  //     case "Endurance":
  //     this.#repCount = "12 to 20+ reps each";
  //     break;
  //   }
  // }

  getName() {
    return this.#name;
  }

  getDescription() {
    return this.#description;
  }

  getMuscles() {
    return this.#muscles;
  }
}

export {Workout};
