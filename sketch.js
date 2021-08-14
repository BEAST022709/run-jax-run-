var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage of the path
  pathImg = loadImage("path.png")
  //loadAnimation of the boy
  boyImg = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  
  createCanvas(400,600);
 //create sprite for the path 
 path = createSprite(200,400)
//add image for the path
path.addImage(pathImg)
//Make the track a moving background by giving velocity Y.
path.scale=1.2;

//create a boy sprite
boy = createSprite(180,340,30,30)
//add animation for the boy
boy.addAnimation("jakerunning",boyImg)
boy.scale=0.08;
  
// create left Boundary
leftBoundary=createSprite(0,0,100,800);
//set visibility as false for left boundary
leftBoundary.visible = false
//create right Boundary
rightBoundary=createSprite(410,0,100,800);
//set visibility as false for right boundary
rightBoundary.visible = false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moving on Xaxis with mouse
  boy.x = World.mouseX
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // collide the boy with the left and right invisible boundaries.
  boy.collide(leftBoundary)
  boy.collide(rightBoundary)
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
