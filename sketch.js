var canvas,bg;
var together;
var cat, catImg1,catImg2;
var mouse, mouseImg1,mouseImg2;

catFour = img4

function preload() {
    bg = loadImage("images/garden.png");
    catImg1= loadAnimation("images/catOne.png");
    catImg2=loadAnimation("images/catTwo.png","images/catThree.png");
    catImg3= loadAnimation("images/catFour.png");
    mouseImg1=loadAnimation("images/mouseOne.png");
    mouseImg2= loadAnimation("images/mouseTwo.png","images/mouseThree.png");
    mouseImg3=loadAnimation("images/mouseFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    cat = createSprite(870, 700);
    cat.addAnimation("catSleep", catImg1);
    cat.scale = 0.1;

    mouse = createSprite(200,700);
    mouse.addAnimation("mouseStand", mouseImg1);
    mouse.scale = 0.1;

}

function draw() {

    background(bg);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catfinalImage", catImg3);
        cat.x =100;
        cat.scale=0.1;
        cat.changeAnimation("catfinalImage");
        mouse.addAnimation("mousefinalImage", mouseImg3);
        mouse.scale=0.1;
        mouse.changeAnimation("mousefinalImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation("catRunning", catImg2);
        cat.changeAnimation("catRunning");
        
        mouse.addAnimation("mouseTeasing", mouseImg2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseTeasing");
    }
}