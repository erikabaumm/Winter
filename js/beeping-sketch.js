var font
var fontitalic
var mappedXposition
var color1
var color2
var interpolatedColor

function setup() {
  createCanvas(windowWidth, windowHeight);
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
  
  text('and the',20, 300);
  
   //b 
  if (mouseX >220 & mouseY >=270){
     text('-...', 250, 300);
  }
  //text('-...', 130, 185);
  
  //e
  if (mouseX > 300 & mouseY >=270){
    text('.', 330, 300);
  }
 //text('.', 165, 185);
  
  //e
  if (mouseX > 320 & mouseY >= 270){
    text('.', 360, 300);
  }
  //text('.', 180, 185);
  
  //p
  if (mouseX > 360 & mouseY >=270){
    text('.--.', 400, 300);
  }
  //text('.--.', 200, 185);
  
  //i
  if (mouseX > 460 & mouseY >=270){
    text('..', 500, 300);
  }
  //text('..', 230, 185);
  
  //n
  if (mouseX > 510 & mouseY >=270){
    text('-.', 550, 300);
  }
  //text('-.', 250, 185);
  
  //g
  if (mouseX > 560 & mouseY >=270){
     text('--.', 600, 300);
  }
  //text('--.', 270, 185);
  
  //m
  if (mouseX > 610 & mouseY >=270){
    text('--', 650, 300);
  }
  //text('--', 320, 185);
  
  //o
  if (mouseX > 660 & mouseY >=270){
    text('---', 700, 300);
  }
  //text('---', 350, 185);
  
  //r
  if (mouseX > 730 & mouseY >=270){
    text('.-.', 760, 300);
  }
  //text('.-.', 380, 185);
  
  //s
  if (mouseX > 790 & mouseY >=270){
    text('...', 820, 300);
  }
  //text('...', 410, 185);
  
  //e
  if (mouseX > 840 & mouseY >=270){
     text('.', 870, 300);
  }
  //text('.', 440, 185);
  
  //----------------//
  
  textSize(width/40);
  
  if (mouseX > 10 & mouseY > 340){
    text('b', 20, 350);
  }
  
  if (mouseX > 60 & mouseY > 360){
    text('e', 70, 370);
  }

  if (mouseX > 110 & mouseY > 380){
    text('e', 120, 390);
  }

  if (mouseX > 160 & mouseY > 390){
     text('p', 165, 400);
  }
  
  if (mouseX > 210 & mouseY > 390){
    text('i', 220, 400);
  }
  
  if (mouseX > 250 & mouseY > 410){
     text('n', 260, 420);
  }
 
  if (mouseX > 300 & mouseY > 390){
    text('g', 310, 400);
  }
  
  if (mouseX > 400 & mouseY > 410){
    text('m', 410, 420);
  }
  
  if (mouseX > 460 & mouseY > 430){
    text('o', 470, 440);
  }
  
  if (mouseX > 510 & mouseY > 450){
    text('r', 520, 460);
  }

  if (mouseX > 560 & mouseY > 440){
    text('s', 570, 450);
  }
  
  if (mouseX > 610 & mouseY > 440){
     text('e', 620, 450);
  }
 
  if (mouseX > 680 & mouseY > 440){
    text(',', 690, 450);
  }
  
  //--------------//

  
  textSize(width/25);
 // color1 = (0,4,43);
 // color2 = (102, 115, 231)
 // interpolatedColor = lerpColor(color1, color2, mouseX/width);
  fill(102, 115, 231);
  text('returning homeward,',610, 590 );
  
  fill(217, 237, 255);
  //if (mouseX > 580 & mouseY > 320){
  if (keyIsPressed){
    text('finds no', 1190, 590);
  
  text("ham operator's ear.", 900, 650);
  }


  if (mouseX > width*1.72/2 & mouseY > height*1.8/2){
  fill(180,0,0);
  textFont (font);
  textSize(width/60);
      text("beginning",width*1.82/2, height*1.85/2);
  }
  }
   // text('finds no', 1190, 850)
  
 // text("ham operator's ear.", 900, 910);
  
 // }
  
