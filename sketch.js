let scene = 0;
let canW = 480;
let canH = 320;

function setup() {
  createCanvas(canW, canH);
}

function draw() {
  background(220);
  if(scene == 0){startUp();}
  if(scene == 1){placeholder1();}
  if(scene == 2){placeholder2();}
  if(scene == 3){howToPlay();}
}
