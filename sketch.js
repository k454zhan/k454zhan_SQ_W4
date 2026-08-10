function preload() {
  for (const scene of Object.values(SCENES)) {
    scene.preload();
  }
}

function setup() {
  createCanvas(960, 540);
  noLoop();
}

function draw() {
  SCENES[currentScene].draw();
}

function mousePressed() {
  navigateFromClick(mouseX, width);
  redraw();
}
