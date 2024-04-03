let x = [];
let y = [];
let xGrowth = [];
let yGrowth = [];
let color = [];

let count = 150;

function setup() {
  colorMode(HSB,360);
  createCanvas(windowWidth, windowHeight);
  background(0);
  snakesSetup();
}

function draw() {
  for(let i = 0; i < count; i++){
    x[i] += xGrowth[i];
    y[i] += yGrowth[i];
    if(x[i] <= 0 || x[i] >= width){
      xGrowth[i] *= -1;
    }
    if(y[i] <= 0 || y[i] >= height){
      yGrowth[i] *= -1;
    }
    fill(color[i],200,360);
    noStroke();
    circle(x[i],y[i],5);
  }
  filter(BLUR, 3);
}

function mousePressed(){ 
    //fullscreen(1);
    snakesSetup();
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
  snakesSetup();
}

function snakesSetup(){
  background(0);
  for(let i = 0; i < count; i++){
    x[i] = random(0,width);
    y[i] = random(0,height);
    xGrowth[i] = random(-5, 5);
    yGrowth[i] = random(-5, 5);
    color[i] = random(0,360);
  }
}
