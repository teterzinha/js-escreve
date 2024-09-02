function setup() {
    createCanvas(600, 600);
     background ("purple");
  }
  
    function draw() {
      
      stroke("black") // borda
      fill("white")
     //console.log(mouseIsPressend)
      
      if(mouseIsPressed){
        circle(mouseX,mouseY, 100,30);
      }
    }