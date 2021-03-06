const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,height,1200,20)
    pig1=new Pig(810,350)
}

function draw(){
    background(0);
    Engine.update(engine);
    textSize(15);
    fill("white")
    text(mouseX+","+mouseY,mouseX,mouseY)
    box1.display();
    box2.display();
    ground.display();
    pig1.display()
}