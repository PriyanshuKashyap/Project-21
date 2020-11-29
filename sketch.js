//Project 21
var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600, 400);
  //createSprite(400, 200, 50, 50);
  bullet = createSprite(100, 200, 100, 30);
  wall = createSprite(1200, 200, thickness, height/2);//x = 1000; displays the wall sprite(x != 1500).
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  
  
  wall.shapeColor = color(80, 80, 80);
  //console.log(wall.shapeColor);
  
  //console.log(wall.x - bullet.x <= wall.width/2 + bullet.width/2);//Always prints false but is in fact true
  //console.log(bullet.isTouching(wall));//Always prints false but is in fact true
}

function draw() {
  background(0,0,0);
  //bullet.x = bullet.x + speed;

  //console.log(wall.x - car.x <= wall.width/2 + car.width/2);//Always prints false but is in fact true
  //console.log(car.isTouching(wall));//Always prints false but is in fact true*/
  //;
  if (hasCollided(bullet, wall)) {
    // It is true in the output of my code. 
    bullet.velocityX = 0;//This statement is not working.
    //When collision happens, based on deformation calculations determine the color of the car as red, yellow or green.*/
    var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);//Calculate the damage of the wall when the bullet collides with the wall using the formula given below.
    if (damage > 10) {
      wall.shapeColor = "red";
    } else {
      wall.shapeColor = "green";
    }
  }
  drawSprites();
}
//Written by Priyanshu
//I recognized the reason for the velocityX = 0 problem. We are problem solvers. According to the DRY principle, sprite.velocityX = value is the same as sprite.x = sprite.x + value!
