var catImg1
var catImg2
var catImg3
var backgroundImg
var background1
var mouseImg1
var mouseImg2
var mouseImg3
var mouse
var cat

function preload() {
   catImg1 = loadAnimation("images/cat1.png") 
   catImg2 = loadAnimation("images/cat2.png", "images/cat3.png")
   catImg3 = loadAnimation("images/cat4.png")

   mouseImg1 = loadAnimation("images/mouse1.png") 
   mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png")
   mouseImg3 = loadAnimation("images/mouse4.png")

   backgroundImg = loadImage("images/garden.png")
}

function setup(){
    createCanvas(1000,800);
    background1 = createSprite(500,400,10,10)
    background1.addImage(backgroundImg)

    cat = createSprite(700,650,100,100)
    cat.addAnimation("lying", catImg1)
   cat.addAnimation("walking", catImg2);    
   cat.addAnimation("end", catImg3)
    cat.debug = true;
    cat.scale = 0.1

    mouse = createSprite(160,650,10,10)
    mouse.addAnimation("standing", mouseImg1)
    mouse.debug = true;
    mouse.scale = 0.1
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    
    if(cat.x - mouse.x - 60 < (cat.width - mouse.width)/2) {
        mouse.addAnimation("end", mouseImg3)
        cat.changeAnimation("end", catImg3)
        mouse.changeAnimation("end", mouseImg3)
        cat.velocityX = 0
    }

    KeyPressed();
    drawSprites();
    console.log(cat.x - mouse.x);
}


function KeyPressed(){
    
  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){ 
    cat.velocityX = -3;  
    cat.changeAnimation("walking")
 if(cat.x - mouse.x-60 < (cat.width - mouse.width)/2){
     cat.velocityX = 0
     cat.changeAnimation("end", catImg3)
 }
}

  if(keyDown("space")){
        mouse.addAnimation("teasing", mouseImg2)
        mouse.changeAnimation("teasing", mouseImg2)
        cat.addAnimation("lying", catImg1)
    }

}
