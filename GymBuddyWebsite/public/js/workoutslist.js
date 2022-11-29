import {Workout} from "./workoutclass.js";

// Instantiating Workout objects
const workout1 = new Workout("Barbell bicep curls", "Curl the bar using your biceps", ["Biceps"]);
const workout2 = new Workout("Tricep extensions", "Extend your triceps", ["Triceps"]);
const workout3 = new Workout("Barbell bench press", "Press with your chest", ["Chest", "triceps", "front delts"]);
const workout4 = new Workout("Push-ups", "Push the floor", ["Chest", "triceps", "front delts", "core"]);
const workout5 = new Workout("Chin-ups", "Chin to the bar. Reverse grip", ["Biceps", "Upper back", "core"]);
const workout6 = new Workout("Pull-ups", "Chin to the bar. Forward grip", ["Biceps", "Upper back", "core"]);
const workout7 = new Workout("Deadlifts", "Pick up dat bar", ["Core", "glutes", "hamstrings", "lower back", "upper back"]);
const workout8 = new Workout("Lat pulldowns", "Pulldown dat bar", ["Biceps", "rear delts", "upper back", "core"]);
const workout9 = new Workout("Rows", "Row however you row", ["Upper back", "lower back", "biceps", "rear delts", "core"]);
const workout10 = new Workout("Squats", "Squat dat bar", ["Core", "glutes", "quads"]);
const workout11 = new Workout("Overhead press", "Raise dat bar", ["Chest", "triceps", "front delts", "upper delts", "core"]);
const workout12 = new Workout("Calf raises", "Moooo", ["Calves"]);
const workout13 = new Workout("Shrugs", "Shrug your shoulders", ["Upper back"]);
const workout14 = new Workout("Leg press", "Press with your legs", ["Quads", "glutes"]);
const workout15 = new Workout("Leg extensions", "Extend your legs", ["Quads"]);
const workout16 = new Workout("Leg curls", "Curl your legs", ["Hamstrings"]);
const workout17 = new Workout("Chest fly machine", "Press the arms of the machine together focusing on your chest", ["Chest", "front delts", "triceps"]);
const workout18 = new Workout("Dumbbell chest flys", "Lie down on a bench and press the dumbbells together above you with straight arms", ["Chest", "front delts", "triceps"]);
const workout19 = new Workout("Dumbbell bench press", "Lie down on a bench and press the dumbbells upward", ["Chest", "triceps", "front delts"]);
const workout20 = new Workout("Dumbbell bicep curls", "Curl the dumbbells using your biceps", ["Biceps"]);
const workout21 = new Workout("Sit-ups", "Sit up", ["Core"]);
const workout22 = new Workout("Crunches", "Crunch your abs", ["Core"]);
const workout23 = new Workout("Planks", "Hold a push-up position on your elbows", ["Core", "lower back", "upper back", "chest", "biceps", "triceps", "front delts", "rear delts", "hamstrings", "glutes"]);
const workout24 = new Workout("Rear lateral raises", "Lean forward and raise dumbbells laterally", ["Rear delts", "triceps", "upper back"]);
const workout25 = new Workout("Barbell upright rows", "Lift the bar to your collar", ["Upper delts", "upper back", "biceps"]);
const workout26 = new Workout("Dumbbell upright rows", "Lift the bumbbells to your collar", ["Upper delts", "upper back", "biceps"]);
const workout27 = new Workout("Lateral raises", "Lift the bumbbells laterally", ["Upper delts"]);
const workout28 = new Workout("Bent-over row", "Lift the bumbbells laterally", ["Upper back", "lower back", "biceps", "rear delts", "core"]);

// Array list of all workout objects
const workoutsList = Workout.workoutsList;

export {workoutsList};
