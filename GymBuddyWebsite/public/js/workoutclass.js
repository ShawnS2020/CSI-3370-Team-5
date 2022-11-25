class Workout {

  #name;
  #description;
  #muscles = [];
  #setCount;

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
  randomizeSetCount(goal) {
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
