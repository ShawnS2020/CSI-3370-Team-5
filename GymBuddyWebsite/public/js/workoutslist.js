import {Workout} from "./workoutclass.js";

// Instantiating Workout objects
const workout1 = new Workout("Bicep curls", "Curl your biceps", ["Biceps"]);
const workout2 = new Workout("Tricep extensions", "Extend your triceps", ["Triceps"]);
const workout3 = new Workout("Bench press", "Press with your chest", ["Chest", "triceps", "front delts"]);
const workout4 = new Workout("Push-ups", "Push the floor", ["Chest", "triceps", "front delts", "core"]);
const workout5 = new Workout("Chin-ups", "Chin to the bar. Reverse grip", ["Biceps", "Upper back", "core"]);
const workout6 = new Workout("Pull-ups", "Chin to the bar. Forward grip", ["Biceps", "Upper back", "core"]);
const workout7 = new Workout("Deadlifts", "Pick up dat bar", ["Core", "glutes", "hamstrings", "lower back", "upper back"]);
const workout8 = new Workout("Lat pulldowns", "Pulldown dat bar", ["Biceps", "rear delts", "upper back", "core"]);
const workout9 = new Workout("Rows", "Row however you row", ["Biceps", "rear delts", "lower back", "upper back", "core"]);
const workout10 = new Workout("Squats", "Squat dat bar", ["Core", "glutes", "quads"]);
const workout11 = new Workout("Overhead press", "Raise dat bar", ["Chest", "triceps", "rear delts", "upper delts", "core"]);
const workout12 = new Workout("Calf raises", "Moooo", ["Calves"]);
const workout13 = new Workout("Shrugs", "Shrug your shoulders", ["Upper back"]);
const workout14 = new Workout("Leg press", "Press with your legs", ["Quads, glutes"]);
const workout15 = new Workout("Leg extensions", "Extend your legs", ["Quads"]);
const workout16 = new Workout("Leg curls", "Curl your legs", ["Hamstrings"]);

// Array of all workout objects
const workoutsList = [workout1, workout2, workout3, workout4, workout5, workout6, workout7, workout8, workout9, workout10, workout11, workout12, workout13, workout14, workout15, workout16];

export {workoutsList};
