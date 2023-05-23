
let backgroundImage, sand, snow;
let clockImage, water, ice;
let secondImage, swim, skate;
let minuteImage, ball, puck;
let hourImage, guy, girl;
let mouseImage, sun, snowflake;
let winter = new Boolean(true);

function preload(){
  //backgroundImage
  sand = loadImage("images/sand.png")
  snow = loadImage("images/snow.jpeg")

  //clockImage
  water = loadImage("images/water.png")
  ice = loadImage("images/ice.png")

 //secondImage
  swim = loadImage("images/swim.png")
  skate = loadImage("images/skate.png")

  //minuteImage
  ball = loadImage("images/ball.png")
  puck = loadImage("images/puck.png")


  //hourImage
  guy = loadImage("images/guy.png")
  girl = loadImage("images/girl.png")

  //mouseImage
  sun = loadImage("images/sun.png")
  snowflake = loadImage("images/snowflake.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  //Background
  background(backgroundImage);

  //Mouse
  image(mouseImage,mouseX-100,mouseY-100,200,200);

  translate(windowWidth/2, windowHeight/2);

  let hr = nf(hour(), 2, 0); 
  let mn = nf(minute(), 2, 0); 
  let sc = nf(second(), 2, 0);
  let mos = month();

  //Clock
  image(clockImage,-250,-250,500,500);

  rotate(-90);

  //Second
  let scAngle = map(sc, 0, 60, 0, 360);
  push();
  rotate(scAngle);
  image(secondImage,80,0,170,170);
  pop();

  //Minute
  let mnAngle = map(mn, 0, 60, 0, 360);
  push();
  rotate(mnAngle);
  image(minuteImage,110,0,50,50);
  pop();

  //Hour
  let hrAngle = map(hr % 12, 0, 12, 0, 360);
  push();
  rotate(hrAngle);
  image(hourImage,-10,0,110,110);
  pop(); 

  if(mos > 3 && mos < 10){
    winter == false;
  }

  if(winter){
  backgroundImage = snow;
  clockImage = ice;
  secondImage = skate;
  minuteImage = puck;
  hourImage = girl;
  mouseImage = snowflake;
  }
  else{
  backgroundImage = sand;
  clockImage = water;
  secondImage = swim;
  minuteImage = ball;
  hourImage = guy;
  mouseImage = sun;
  }
}
