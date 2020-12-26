/*class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
var options={
    bodyA:body1,
    bodyB:body2,
    pointB:{x:this.offsetX,y:this.offsetY},
    

}
this.Rope=Matter.constraint.create(options)
World.add(world,this.Rope)
    }
    display(){
var pointA=this.Rope.bodyA.position
var pointB=this.Rope.bodyA.position
stokeWeight(1)
var Anchor1X=pointA.x
var Anchor1Y=pointA.y

var Anchor2X=pointB.x+this.offsetX
var Anchor2Y=pointB.y+this.offsetY
line(Anchor1X,Anchor1Y,Anchor2X, Anchor2Y)
    }
}*/

/*/class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.Slingshot = Constraint.create(options);
        World.add(world, this.Sling);
    }
    display(){
        
      
        var bodyA = this.Slingshot.bodyA.position;
        var pointB = this.pointB
        strokeWeight(4);
        line(bodyA.x, bodyA.y, pointB.x, pointB.y);
    
}
}
*/

class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
       
            
        }
        this.pointB=pointB
        this.Rope = Matter.Constraint.create(options);
        World.add(world, this.Rope);
    }


    display(){
      
        var bodyA = this.Rope.bodyA.position;
        var pointB = this.pointB
        strokeWeight(5);
        line(bodyA.x, bodyA.y, pointB.x, pointB.y);
    
}
}
