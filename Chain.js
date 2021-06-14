class Chain{
    
    constructor(object1,object2) {
     
     var options ={
        //first object 
        bodyA:object1,
        //second object
        bodyB:object2,
        //describes stiffness of a constraint
        stiffness:0.04,
        //distance between objects
        length:10
    }

    //created this.chain from matter.constraint
    this.chain = Constraint.create(options)
    //added chain and its world to matter.world
    World.add(world,this.chain)
    }

display() {
   
    //name spacing
    var pointA = this.chain.bodyA.position;
    var pointB = this.chain.bodyB.position;
    //pushes changes from this point 
    push();
    //increases width of line
    strokeWeight(4);
    //to create line
    line(pointA.x,pointA.y,pointB.x,pointB.y);
     //pop changes to old settings
    pop();
   

}

}

