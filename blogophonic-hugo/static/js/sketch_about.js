function setup() {
    createCanvas(window.innerWidth, window.innerHeight);

  }
  
 function draw() {
    background('white')
    textSize(64)
    if (mouseIsPressed == true){
          text('🌈', mouseX-32, mouseY+32);
    
}}