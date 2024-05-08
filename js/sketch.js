var font;
var fontitalic;
var mappedXposition;
var color1;
var color2;
var color3;
var interpolatedColor;
var interpolatedColor2;


function preload() {
  font = loadFont ('font/Redaction50-8Mg4n.otf');
  fontitalic = loadFont ('font/Redaction50Italic-2ODWo.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
 // mappedXposition = map(mouseX,0, width,color3,color1);
  //i want background as light blue and change to white
 // mappedXposition = map(mouseX,50, width,234, 255,255);
 // background(mappedXposition);
  //-------------//
  color1 = color(217, 237, 255);//lightblue
  color2 = color(180, 0, 0);//red
  color3 = color(255, 255, 255)//white
  interpolatedColor = lerpColor(color1, color2, mouseX/width);
  interpolatedColor2 = lerpColor(color1, color3, mouseX/width);
  
  background(interpolatedColor2);

  
  //------------//
  textFont(fontitalic);
  textSize(width/14);
  fill(color1);
  text('Eclogue IV:', width*(1.2/3), height*(2/2.5));
  
  textFont(fontitalic);
  textSize(width/14);
  //i want winter to change from light blue to red
  
  fill(interpolatedColor);
  text('Winter', width*(2.3/3), height*(2/2.5));
  
  textFont(font);
  textSize(width/14);
  fill(color1);
  text('by Joseph Brodsky', width*(1.2/3), height*(2/2.1));
  
}