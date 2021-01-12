class Rain {
    constructor(x,y,){
        var potion = {
            isStatic:false,
            'restitution':0.5,
          'friction':1,
          'density':1.9
        }
        this.body = Bodies.circle(x,y,2.5,potion);
        World.add(world,this.body)
       
    }
    display(){
        var pos = this.body.position
        fill("blue");
        ellipesMode(CENTAR)
        ecllipes(pos.x, pos.y, 55, 55);
    }
}  
    
