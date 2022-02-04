var ball;
function setup() {
  createCanvas(400,500);
  ball=createSprite(200,200,50,50)
}

function draw() 
{
  background("white");
  if(keyIsDown(RIGHT_ARROW)){
    ball.position.x=ball.position.x + 10

  }
  if(keyIsDown(LEFT_ARROW)){
    ball.position.x=ball.position.x - 10

  }
  if(keyIsDown(DOWN_ARROW)){
    ball.position.y=ball.position.y + 10

  }
  if(keyIsDown(UP_ARROW)){
    ball.position.y=ball.position.y - 10

  }
  
  
  drawSprites()


}




