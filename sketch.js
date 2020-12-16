function setup() {
  let myCanvas = createCanvas(700, 400, WEBGL);
  myCanvas.parent('sphere')
}

function draw() {
  background(100);
  rotateY(frameCount * 0.009);

  for (let j = 0; j < 2; j++) {
    push();
    for (let i = 0; i < 10; i++) {
      translate(
        sin(frameCount * 0.03 + j) * 80,
        cos(frameCount * 0.05 + j) * 80,
        i * 0.5
      );
      rotateX(frameCount * 0.005);
      push();
      sphere(25);
      pop();
    }
    pop();
  }
}