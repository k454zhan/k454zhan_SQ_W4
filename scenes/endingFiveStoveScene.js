SCENES.endingFiveStove = {
  preload() {
    this.art = loadImage("assets/images/screen 3.2.1.jpg");
  },
  draw() {
    image(this.art, 0, 0, width, height);
    drawEndingPrompt();
  },
};
