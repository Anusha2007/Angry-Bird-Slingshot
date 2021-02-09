class Slingshot{
    constructor(bodyA, pointB){    //x,y
        var options = {
            bodyA: bodyA,  //bodyA:x
            pointB: pointB,  //pointB:y
            stiffness: 0.1,
            length: 10
        }
        this.pointB=pointB;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        if (this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(8);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}
    fly(){
        this.chain.bodyA=null;
    }
}