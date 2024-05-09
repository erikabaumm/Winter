var font
var zero
var randomNumber

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 4, 43);
 // background('white');
  randomNumber = int(random(0,100));
  console.log(randomNumber);

 
}

function preload() {
  font = loadFont ('font/Redaction50-8Mg4n.otf');
}

function draw() {
  
  fill('white');
  textSize(width/24);
  let zero = 'life';
  text(zero, mouseX, mouseY, randomNumber,randomNumber);
  
 // noStroke();
 // ellipse(mouseX, mouseY, 100);
  
  
  fill('black');
  textFont(font);
  textSize(width/24);
  textAlign(CENTER);
  if (mouseIsPressed){
    text('My life has dragged on.',width/2,height/2);
}

if (mouseX > width*1.83/2 & mouseY > height*1.83/2){
fill(180,0,0);
textFont (font);
textSize(width/60);
    text("next",width*1.93/2, height*1.93/2);
}

}
//fill(180,0,0);
  //noStroke()
 //  let triangleSize = min(windowWidth, windowHeight) * 0.1;
 // triangle(820, 550, 820, 600, 870, 575);
