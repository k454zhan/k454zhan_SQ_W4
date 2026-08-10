SCENES.endingFour = {
  preload() {
    this.art = loadImage("assets/images/screen 3.2.2.jpg");
  },
  draw() {
    image(this.art, 0, 0, width, height);
    drawEndingPrompt();
  },
};
