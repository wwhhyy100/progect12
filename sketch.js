var garden,rabbit;
var gardenImage,rabbitImage;
var apple,appleImage
var leafImage,leaf

function preload(){
  gardenImage = loadImage("garden.png");
  rabbitImage = loadImage("rabbit.png");
  appleImage = loadImage("apple.png")
  leafImage = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImage);

//creating rabbit
rabbit = createSprite(180,399,30,30);
rabbit.scale =0.076;
rabbit.addImage(rabbitImage);


var rand =  Math.round(random(1,100))
console.log(rand)

}

function draw() {
  background(0);


  rabbit.x = World.mouseX;
    
  

  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawnLeaf();
  spawnApples();
  drawSprites();
}


function spawnApples(){

if(frameCount %  40 === 0){


//creating the apple
apple = createSprite(200,50,10,10);
apple.scale = 0.04;
apple.addImage(appleImage);
apple.velocityY = 5

apple.x = Math.round(random(20,300))

console.log(rabbit.depth);

console.log(apple.depth); 

apple.depth = rabbit.depth  

rabbit.depth = rabbit.depth+2
}
 }

function spawnLeaf(){

  if(frameCount %  40 === 0){


//creating the leaf
leaf = createSprite(100,50,10,10);
leaf.scale = 0.04;
leaf.addImage(leafImage);
leaf.velocityY = 5

leaf.x = Math.round(random(200,300))

console.log(rabbit.depth);

console.log(leaf.depth); 

leaf.depth = rabbit.depth  

rabbit.depth = rabbit.depth+2

  }
}