var k,n



function setup() {
  createCanvas(800,400);
 k= createSprite(400, 200, 50, 50);
 n= createSprite(650,100, 50, 70);

 k.shapeColor="red"
 n.shapeColor="red"
}

function draw() {
  background(0);  

  k.x=World.mouseX
  k.y=World.mouseY

  if(k.x-n.x<k.width/2+n.width/2 && n.x-k.x<k.width/2+n.width/2 && k.y-n.y<k.height/2+n.height/2 && n.y-k.y<k.height/2+n.height/2 ){
    k.shapeColor="blue"
    n.shapeColor="blue"
  }
  else{
    k.shapeColor="red"
    n.shapeColor="red"
  }


  drawSprites();
}