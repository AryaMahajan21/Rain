class drops{
constructor(x,y,width,height){
var options = {
    friction: 0.1,
    
}
    this.width = width
    this.height = height
    this.body = Bodies.rectangle(x,y,width,height,options)

}
display(){
var pos = this.body.position
ellipseMode(CENTER)
fill("blue")
ellipse(pos.x,pos.y,this.width,this.height)
}
}