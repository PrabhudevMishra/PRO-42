var hr,mn,sc;
var arc1, arc2, arc3;


function setup() {
  createCanvas(800,800);
  angleMode(DEGREES);
}

function draw() {
  background('black');  

  

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0, 360);

  strokeWeight(4);
  fill(255);
  ellipse(400,400,500);
  stroke(255,150,100);

  strokeWeight(10);
  stroke("red");
  arc1 = arc(400,400,500, 500, 270, 270 + 6 * sc);

  strokeWeight(15);
  stroke(9,237,47);
  arc2 = arc(400,400,470, 470, 270, 270+ 6*mn );

  strokeWeight(20);
  stroke("blue");
  arc3 = arc(400,400,430, 430, 270, 270 + 30 * hr);

  
  ellipse2 = ellipse(400,400,10)
  fill("black")

  push();
  translate(400,400);
  rotate(-90);
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(4);
  line(0,0,180,0);
  pop();

  push();
  translate(400,400);
  rotate(-90);
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(8);
  line(0,0,160,0);
  pop();


  push();
  translate(400,400);
  rotate(-90);
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(8);
  line(0,0,100,0);
  pop();


  drawSprites();
}