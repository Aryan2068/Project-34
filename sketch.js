var dog_img, dog, happy_dog, database, foodS, foodStock;

function preload()
{
  dog_img = loadImage("Dog.png");
  happy_dog = loadImage("happydog.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250, 250);
  dog.addImage(dog_img);
  dog.scale = 0.5;
  foodStock = database.ref('Food');
  foodStock.on("value", readStock, showError);
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happy_dog);
    
  }
  drawSprites();

  text('database/foodStock');
  //add styles here

}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x <= 0){
    x = 0;
  }
  else{
    x = x-1;
  }
  
  database.ref('/').update({
    Food: x
  }

  )
}
function showError(){
  console.log("The system has gliched...");
}

