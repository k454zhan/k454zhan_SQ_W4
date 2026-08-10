function drawEndingPrompt() {
  push();
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  textFont("Arial");
  textSize(15);
  noStroke();
  fill(0, 180);
  rect(width / 2, height - 30, 210, 34, 17);
  fill(255);
  text("ENDING · CLICK TO RESTART", width / 2, height - 30);
  pop();
}
