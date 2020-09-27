var hr, mn, sc

function setup() {
  createCanvas(800,400);
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 360);
  mnAngle = map(mn, 0, 60, 360);
  hrAngle = map(hr, 0, 12, 360);
}

function draw() {
  background(0);  

    push();
    rotate(scAngle);
    translate(scAngle);
    stroke(0, 0, 255);
    strokeWeight(7);
    line(0, 0, 100, 0);
    pop();

    push();
    rotate(mnAngle);
    translate(mnAngle)
    stroke(0, 255, 0);
    strokeWeight(7);
    line(0, 0, 70, 0);
    pop();

    push();
    rotate(hrAngle);
    translate(hrAngle)
    stroke(255, 0, 0);
    strokeWeight(7);
    line(0, 0, 40, 0);
    pop();

    display();
}
