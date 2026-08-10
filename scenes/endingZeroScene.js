SCENES.endingZero = {
  preload() {
    this.art = loadImage("assets/images/Screen 3.1.1.jpg");
  },
  draw() {
    image(this.art, 0, 0, width, height);
    drawEndingPrompt();
  },
};
