var bullet,wall;
var thickness,speed,weight;


function setup() {
  createCanvas(1600,400);
 
  speed=random(55,90);
  weight=random(400,1500); 
  
 
  bullet=createSprite(50,200,50,50);
  wall=createSprite(1200,200,60,height/2);
  
  bullet.velocityX=speed;
  thickness=random(22,83);
}

function draw() {
  background("black")
  if (hasCollided(bullet,wall)){
   bullet.velocityX=0;
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
  }
  if(damage>10){
   wall.wallshapeColor=color(255,0,0);
  }
  if(damage<10){
  wall.wallshapeColor=color(0,255,0);
  }
  drawSprites();
  hasCollided(bullet,wall);
}


function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;

  if ( bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}