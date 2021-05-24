const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1
var bag

function preload(){

    bag = loadImage("sprites/Freakyshubham.png")
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

   
    
    box1 = new Box(222,380,30,30);
    box2 = new Box(247,380,30,30);
    box3 = new Box(270,380,30,30);
    box4 = new Box(300,380,30,30);
    box5 = new Box(330,380,30,30);
    box6 = new Box(226,344,30,30);
    box7 = new Box(258,344,30,30);
    box8 = new Box(290,344,30,30);
    box9 = new Box(322,344,30,30);
    box10 = new Box(235,317,30,30);
    box11 = new Box(267,317,30,30);
    box12 = new Box(300,317,30,30);
    box13 = new Box(249,283,30,30);
    box14 = new Box(282,283,30,30);
    box15 = new Box(259,255,30,30);

   

   slingshot1 = new Slingshot(box15.body,{x:820,y:170});
  
    bird = new Bird(10,10);

}

function draw(){
    background(bag);
    
    text (mouseX+','+mouseY,50,50);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
   
    ground.display();
  
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box5.display();
   
 
bird.display();
   

    
}function mouseDragged(){
    Matter.Body.setPosition(box15.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot1.fly()
}

async function getBackgroundImg(){
    var response = await fetch("http://worldclockapi.com/api/json/est/now");
    var responseJSON = await response.json();

    var currentDateTime = responseJSON.currentDateTime;
    var hour = currentDateTime.slice(11,13);
    
    if(hour>=01 && hour<=12){
        bag = "sprites/Freakyshubham.png";
    }
    else{
        bg2 = "sprites/bg2.jpg";
    }
    //#got it...
    backgroundImg = loadImage(bg2);
    console.log(backgroundImg);
}
