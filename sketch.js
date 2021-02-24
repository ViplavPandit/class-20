var movingRect,fixedRect




function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(400,200,20,20);

  

}

function draw() {
  background("pink");
  
  movingRect.x=mouseX
  movingRect.y= mouseY

if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 &&
  fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2 &&
  movingRect.y-fixedRect.y <= movingRect.height/2+fixedRect.height/2 &&
  fixedRect.y-movingRect.y <= movingRect.height/2+fixedRect.height/2  
  ){

 textSize(20)
   text ("Box are touching ", 50,200)

}
else{
  textSize(20)
   text ("Box are not touching ", 50,200)

}
  


  drawSprites();
}