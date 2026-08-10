SCENES.start = {
  preload() {
    this.art = loadImage("assets/images/Screen 1.jpg");
  },
  draw() {
    image(this.art, 0, 0, width, height);
  },
};
