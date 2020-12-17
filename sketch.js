//Create variables here
var happyDog,dog,img1,img2;
var database;
var foodS=20;
function preload()
{
  img1=loadImage("Dog.png");
  img2=loadImage("happydog.png");
	//load images here
}

function setup() {
  database=firebase.database();
  console.log(database);
  createCanvas(500, 500);
  dog=createSprite(250,250,20,20);
  dog.addImage(img1);
  dog.scale=0.3;
  
}


function draw() {  
background(0,140,25);
  drawSprites();
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(img2)
  }
textSize(20);
fill(255);
text("Note Press UP_ARROW Key To Feed the Dog",50,50);
textSize(20);
fill(255);
text("food remaining"+foodS,150,100);
if(keyDown(UP_ARROW)){
  foodS=foodS-1;
} 
if(foodS<=0){
  foodS=0;
}
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  
  database.ref('Food').update({
Food:x
  })
}

