var font
var fontitalic
var wordcrimson

function setup() {
  createCanvas(displayWidth, displayHeight);
}

function preload() {
  font = loadFont ('font/Redaction50-8Mg4n.otf');
  fontitalic = loadFont('font/Redaction50Italic-2ODWo.otf');
}


function draw() {
  background('white');
  textFont(font);
  textSize(width/25);
  fill(217, 237, 255);
  text('..or--', 20, 50);
  
  text('the earth itself,',20, 100);
  
  textFont(fontitalic);
  
 // text('s   i   g   h   i   n   g', 485, 60);
  if (mouseX > 500 & mouseY > 250){
    text('s', 530, 300);
  }
  
  if (mouseX > 650 & mouseY > 250){
    text('i', 680, 300);
  }
  
  if(mouseX > 800 & mouseY > 250){
    text('g', 830, 300);
  }
  
  if (mouseX > 950 & mouseY > 250){
    text('h', 980, 300);
  }
  
  if(mouseX > 1100 & mouseY > 250){
    text('i', 1130, 300);
  }
  
  if(mouseX > 1250 & mouseY > 250){
    text('n', 1280, 300);
  }
  
  if(mouseX > 1400 & mouseY > 250){
    text('g', 1430, 300);
  }
  
  textFont(font);
  text('out of habit', 20, 550);
  
  text('for its galactic past, its subzero horrors.', 20,620);
  
 // text('Cheeks burn crimson like radishes even here',20, 380);
  
  text('Cheeks burn',20, 690);
  
  //fill(180,0,0);
  let wordcrimson = 'crimson';
  text(wordcrimson, 360, 690);
  
  if (mouseX > 350 & mouseY > 670){
    fill(180,0,0)
    text(wordcrimson, 360, 690);
  } else {
    if (mouseX > 350 & mouseY > 670){
      fill(217, 237, 255);
    }
  }
  
  fill(217, 237, 255);
  text('like radishes even here.', 580, 750);
  
 // triangle()
}