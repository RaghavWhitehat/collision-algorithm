var fixedRect, movingRect;
var car1,car2,car3,car4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car1=createSprite(100,200,80,20)
  car2=createSprite(200,200,80,20)
  car3=createSprite(300,200,80,20)
  car4=createSprite(400,200,80,20)
 
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(collision(movingRect,car1)){
    movingRect.shapeColor = "red";
    car1.shapeColor = "red";
  }
    else{
      movingRect.shapeColor = "green";
      car1.shapeColor = "green";
      
    }
  
   
    
  
  



  drawSprites();
}

