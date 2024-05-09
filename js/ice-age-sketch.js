var font
var fontitalic
var mappedXposition
var mappedYposition

let angleRotate = 0.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function preload() {
  font = loadFont ('font/Redaction50-8Mg4n.otf');
  fontitalic = loadFont ('font/Redaction50Italic-2ODWo.otf');
}

function draw() {
  background('white');
  mappedXposition = map(mouseX,300, width,1000,830);
  textFont(font);
  textSize(width/25);
  fill(180,0,0);
  mappedYposition = map(mouseY,0, width, 200, 400);
  
  if(mouseIsPressed){
    push();
  let angle1 = radians(-60);
  translate(100, 180);
  rotate(angle1);
  // Draw the letter to the screen
      text("-... .-.. .. --.. --.. .- .-. -.. .......",40, 1100);
  pop();
  }
   
  if(mouseIsPressed){
     push();
  let angle2 = radians(-45);
  translate(200, 180);
  rotate(angle2);
  // Draw the letter to the screen
  text("-... .-.. .. --.. --.. .- .-. -.. .......", 100, 500);
  pop();
  }
 
  if (mouseIsPressed){
    push();
  let angle3 = radians(-55);
  translate(90, 200);
  rotate(angle3);
  // Draw the letter to the screen
  text("-... .-.. .. --. --.. .- .-. -.. .......", -10, 350);
  pop();
  
  }
  
  if (mouseIsPressed){
    push();
  let angle4 = radians(-50);
  translate(10, 200);
  rotate(angle4);
  // Draw the letter to the screen
  text("-... .-.. .. --. --.. .- .-. -.. .......", -10, 250);
  pop();
  
  }
  
  if(mouseIsPressed){
     push();
  let angle5 = radians(-50);
  translate(200, 180);
  rotate(angle5);
  // Draw the letter to the screen
  text("-... .-.. .. --.. --.. .- .-. -.. .......", -300, 900);
  pop();
  }
   
  
  
 //  push();
//  let angle1 = radians(-30);
//  translate(100, 180);
 // rotate(angle1);
  // Draw the letter to the screen
//  text("-... .-.. .. --.. --.. .- .-. -.. .......",-30, 0);
//  pop();
  //------------------------//
 // push();
//  let angle2 = radians(-45);
 // translate(200, 180);
 // rotate(angle2);
  // Draw the letter to the screen
//  text("-... .-.. .. --.. --.. .- .-. -.. .......", 100, 150);
 // pop();
  //------------------------//
//  push();
//  let angle3 = radians(-55);
//  translate(90, 200);
//  rotate(angle3);
  // Draw the letter to the screen
//  text("-... .-.. .. --. --.. .- .-. -.. .......", -10, 350);
//  pop();
  
  
  
  textSize(width/25);
  fill(217, 237, 255);
  text('In the recitative of a blizzard', 20, 200);
  text('a keen ear picks up the tune of', 20, 250);
  text('the Ice Age.', mappedXposition, 250);
 // text('the Ice Age.', 400, 230);
  text("Every 'Down in the Valley' is, for sure, ", 20, 300);
  text('a chilled', 20, 360);
  
  if (mouseX > 250 & mouseY > 310){
    text('b', 260, 360);
  }
  
  if (mouseX > 290 & mouseY > 305){
     text('o', 300, 355);
  }
 
  if (mouseX > 330 & mouseY > 310){
     text('o', 340, 360);
  }
 
  if (mouseX >370 & mouseY > 315){
    text('g', 380, 365);
  }
  
  if (mouseX > 410 & mouseY > 310){
     text('i', 420, 360);
  }
 
  if (mouseX > 450 & mouseY > 305){
     text('e', 460, 355);
  }
 
  if (mouseX > 490 & mouseY > 310){
    text('-', 500, 360);
  }
  
  if (mouseX > 530 & mouseY > 315){
    text('w', 540, 365);
  }
  
  if (mouseX > 580 & mouseY > 310){
     text('o', 590, 360);
  }
 
  if (mouseX > 620 & mouseY > 305){
    text('o', 630, 355);
  }
  
  if (mouseX > 660 & mouseY > 310){
    text('g', 670, 360);
  }
 
  if (mouseX > 700 & mouseY > 315){
     text('i', 710, 365);
  }
 
  if (mouseX > 740 & mouseY > 310){
  text('e', 750, 360);
  }
  
  if (mouseX > 780 & mouseY > 305){
      text('.', 790, 355);
  }
  
  textFont(fontitalic);
  text('A bitter, brittle', 20, 595);
  
  text('cold represents, as it were, a', 20,655);

  //fill(0, 4, 43);
  fill(180,0,0);
  if(mouseX > 730 & mouseY > 650){
  text('message', 750, 655);
  }
  
  fill(217, 237, 255)
  text('to the body of its final temperature.', 20, 715);
  
  if (mouseX > width*1.8/2 & mouseY > height*1.83/2){
  fill(180,0,0);
  textFont (font);
  textSize(width/60);
      text("next",width*1.9/2, height*1.93/2);
  }
}

