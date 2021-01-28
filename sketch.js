var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect2 = createSprite(600,200,50,80);
  


  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(squarsemeetingeachother(movingRect,fixedRect)   ){
      
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";

  }
else{

  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";


}


if(squarsemeetingeachother(movingRect,fixedRect2)   ){
      
  text("kaboom",600, 270 )

}




  drawSprites();
}

