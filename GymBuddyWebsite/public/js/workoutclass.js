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

  // workoutlist.js calls the next three "append" functions
  // Each of the functions creates an html span element, populates it with the respective data,
  // and appends it to the preexisting html element that gets passed to the function
  appendName(element) {
    const spanName = document.createElement("span");
    spanName.innerHTML = this.#name;
    element.appendChild(spanName);
  }

  appendDescription(element) {
    const spanDescription = document.createElement("span");
    spanDescription.innerHTML = this.#description;
    element.appendChild(spanDescription);
  }

  appendMuscles(element) {
    const spanMuscles = document.createElement("span");
    spanMuscles.innerHTML = this.getMuscles();
    element.appendChild(spanMuscles);
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
