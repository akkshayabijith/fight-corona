const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var polygon;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("medical_mask_PNG41.png");
  corona = loadImage("go corona.jpg");
  corona2 = loadImage("corona.jpg")
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  //top
  blocks9 = new Block(700,95,30,40);

  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",300,30);
  textSize(10);
  text("Press Space to get a second Chance to Play!!",650 ,350);
  ground.display();
  stand1.display();
  imageMode(CENTER)
  image(corona,block16.body.position.x,block16.body.position.y,30,40);
  image(corona,block15.body.position.x,block15.body.position.y,30,40);
  image(corona,block14.body.position.x,block14.body.position.y,30,40);
  image(corona,block13.body.position.x,block13.body.position.y,30,40);
  image(corona,block12.body.position.x,block12.body.position.y,30,40);
  image(corona,block11.body.position.x,block11.body.position.y,30,40);
  image(corona,block10.body.position.x,block10.body.position.y,30,40);
  image(corona,block9.body.position.x,block9.body.position.y,30,40);
  image(corona,block8.body.position.x,block8.body.position.y,30,40);
  image(corona,block7.body.position.x,block7.body.position.y,30,40);
  image(corona,block6.body.position.x,block6.body.position.y,30,40);
  image(corona,block5.body.position.x,block5.body.position.y,30,40);
  image(corona,block4.body.position.x,block4.body.position.y,30,40);
  image(corona,block3.body.position.x,block3.body.position.y,30,40);
  image(corona,block2.body.position.x,block2.body.position.y,30,40);
  image(corona,block1.body.position.x,block1.body.position.y,30,40);

  stand2.display();
  image(corona2,blocks1.body.position.x,blocks1.body.position.y,30,40);
  image(corona2,blocks2.body.position.x,blocks2.body.position.y,30,40);
  image(corona2,blocks3.body.position.x,blocks3.body.position.y,30,40);
  image(corona2,blocks4.body.position.x,blocks4.body.position.y,30,40);
  image(corona2,blocks5.body.position.x,blocks5.body.position.y,30,40);
  image(corona2,blocks6.body.position.x,blocks6.body.position.y,30,40);
  image(corona2,blocks7.body.position.x,blocks7.body.position.y,30,40);
  image(corona2,blocks8.body.position.x,blocks8.body.position.y,30,40);
  image(corona2,blocks9.body.position.x,blocks9.body.position.y,30,40);

  image(polygon_img ,polygon.position.x,polygon.position.y,80,60);

  blocks1

  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(this.polygon);
  }
}