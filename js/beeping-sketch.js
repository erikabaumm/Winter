var font
var fontitalic
var mappedXposition
var color1
var color2
var interpolatedColor

function setup() {
  createCanvas(displayWidth, displayHeight);
}

function preload() {
  font = loadFont ('font/Redaction50-8Mg4n.otf');
  fontitalic = loadFont ('font/Redaction50Italic-2ODWo.otf');
}

function draw() {
  background(0,4,43);
  //----------//
 // color1 = (0,4,43);
 // color2 = (102, 115, 231)
 // interpolatedColor = lerpColor(color1, color2, mouseX/height);
  textFont(font);
  textSize(width/25);
  fill(102, 115, 231);
  text('Cosmic space is always', 20,50);
  text('shot through with matte agate,', 20, 100);
  
  text('and the',20, 350);
  
   //b 
  if (mouseX >220 & mouseY >=320){
     text('-...', 250, 350);
  }
  //text('-...', 130, 185);
  
  //e
  if (mouseX > 300 & mouseY >=320){
    text('.', 330, 350);
  }
 //text('.', 165, 185);
  
  //e
  if (mouseX > 320 & mouseY >= 320){
    text('.', 360, 350);
  }
  //text('.', 180, 185);
  
  //p
  if (mouseX > 360 & mouseY >=320){
    text('.--.', 400, 350);
  }
  //text('.--.', 200, 185);
  
  //i
  if (mouseX > 460 & mouseY >=320){
    text('..', 500, 350);
  }
  //text('..', 230, 185);
  
  //n
  if (mouseX > 510 & mouseY >=320){
    text('-.', 550, 350);
  }
  //text('-.', 250, 185);
  
  //g
  if (mouseX > 560 & mouseY >=320){
     text('--.', 600, 350);
  }
  //text('--.', 270, 185);
  
  //m
  if (mouseX > 610 & mouseY >=320){
    text('--', 650, 350);
  }
  //text('--', 320, 185);
  
  //o
  if (mouseX > 660 & mouseY >=320){
    text('---', 700, 350);
  }
  //text('---', 350, 185);
  
  //r
  if (mouseX > 730 & mouseY >=320){
    text('.-.', 760, 350);
  }
  //text('.-.', 380, 185);
  
  //s
  if (mouseX > 790 & mouseY >=320){
    text('...', 820, 350);
  }
  //text('...', 410, 185);
  
  //e
  if (mouseX > 840 & mouseY >=320){
     text('.', 870, 350);
  }
  //text('.', 440, 185);
  
  //----------------//
  
  textSize(width/40);
  
  if (mouseX > 10 & mouseY > 390){
    text('b', 20, 400);
  }
  
  if (mouseX > 60 & mouseY > 410){
    text('e', 70, 420);
  }

  if (mouseX > 110 & mouseY > 430){
    text('e', 120, 440);
  }

  if (mouseX > 160 & mouseY > 440){
     text('p', 165, 450);
  }
  
  if (mouseX > 210 & mouseY > 440){
    text('i', 220, 450);
  }
  
  if (mouseX > 250 & mouseY > 460){
     text('n', 260, 470);
  }
 
  if (mouseX > 300 & mouseY > 440){
    text('g', 310, 450);
  }
  
  if (mouseX > 400 & mouseY > 460){
    text('m', 410, 470);
  }
  
  if (mouseX > 460 & mouseY > 480){
    text('o', 470, 490);
  }
  
  if (mouseX > 510 & mouseY > 500){
    text('r', 520, 510);
  }

  if (mouseX > 560 & mouseY > 490){
    text('s', 570, 500);
  }
  
  if (mouseX > 610 & mouseY > 490){
     text('e', 620, 500);
  }
 
  if (mouseX > 680 & mouseY > 490){
    text(',', 690, 500);
  }
  
  //--------------//

  
  textSize(width/25);
 // color1 = (0,4,43);
 // color2 = (102, 115, 231)
 // interpolatedColor = lerpColor(color1, color2, mouseX/width);
  fill(102, 115, 231);
  text('returning homeward,',610, 650 );
  
  fill(217, 237, 255);
  //if (mouseX > 580 & mouseY > 320){
  if (keyIsPressed){
    text('finds no', 1190, 650)
  
  text("ham operator's ear.", 900, 710);
  }
   // text('finds no', 1190, 850)
  
 // text("ham operator's ear.", 900, 910);
  
 // }
  
}