// ============================================================
// game.js: Game Logic
// ============================================================
// This file contains all game state and navigation logic for
// Getting Under It. It does not draw anything — drawing is
// handled by the individual scene files.
// Variables defined here are available in sketch.js and all
// scene files because all files share the same global scope.

// Scene files add their preload and draw functions to this registry.
const SCENES = {};

const START_SCENE = "start";

// Every non-ending scene maps a left or right click to the next scene.
const SCENE_ROUTES = {
  start: { left: "coldHint", right: "hotChoice" },
  coldHint: { left: "iceLeft", right: "iceRight" },
  iceLeft: { left: "endingThree", right: "endingTwo" },
  iceRight: { left: "endingFiveCold", right: "endingOne" },
  hotChoice: { left: "hotHint", right: "hotStove" },
  hotHint: { left: "endingZero", right: "endingFiveHot" },
  hotStove: { left: "endingFiveStove", right: "endingFour" },
};

const ENDING_SCENES = new Set([
  "endingThree",
  "endingTwo",
  "endingFiveCold",
  "endingOne",
  "endingZero",
  "endingFiveHot",
  "endingFiveStove",
  "endingFour",
]);

let currentScene = START_SCENE;

function isCurrentSceneEnding() {
  return ENDING_SCENES.has(currentScene);
}

function resetGame() {
  currentScene = START_SCENE;
}

function navigateFromClick(clickX, canvasWidth) {
  if (isCurrentSceneEnding()) {
    resetGame();
    return;
  }

  const direction = clickX < canvasWidth / 2 ? "left" : "right";
  currentScene = SCENE_ROUTES[currentScene][direction];
}
