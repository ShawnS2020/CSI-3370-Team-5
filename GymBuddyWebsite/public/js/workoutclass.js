class Workout {

  #name;          // Name of the workout
  #description;   // Description of the workout
  #muscles;       // Muscles used in the workout
  #repTime;       // Avg time to perform one rep of the workout

  constructor(name, description, muscles, repTime) {
    this.#name = name;
    this.#description = description;
    this.#muscles = muscles;
    this.#repTime = repTime;
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
