const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload(){
    
}

function setup(){
    createCanvas(600,800);
    engine = Engine.create();

    drop = new drops(200, 400, 10,10)
    
}

function draw(){
    background("black");    
    Engine.update(engine);

    drop.display()
}   

