SCENES.endingFiveCold = {
  preload() {
    this.art = loadImage("assets/images/2.2.1.jpg");
  },
  draw() {
    image(this.art, 0, 0, width, height);
    drawEndingPrompt();
  },
};
