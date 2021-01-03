var wall,thickness;
var bullet,speed,weight;


function setup() 
{
  createCanvas(800,400);
  var bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = color(255,255,255);
  thickness = random(22,83);
  speed = random(30,52);
  weight = random(400,1500);
  wall = createSprite(600,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() 
{
  background(0); 

  if (hasCollided(bullet,wall))
  {
    bullet.velocityY = speed;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
    if (damage >10)
    {
      wall.shapeColor = color(255,0,0);
    }
    if (damage<10)
    {
       wall.shapeColor = color(0,255,0);
    }
  
  
  }
 
  
  drawSprites();
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge =lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
   return false;
  
}