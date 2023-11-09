function setup() {
    createCanvas(400, 400);
    background("#98729E");
  }
  
  function draw() {
    stroke("rgb(0,0,0)");
    fill("rgb(180,49,161)");
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
    }
  }
  