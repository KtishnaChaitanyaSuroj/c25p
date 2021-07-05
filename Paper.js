class Paper {
     constructor(x,y){
         var options = {
             isStatic: false,
             restitution: 0.3, 
             friction:0.5,
             density:1.2,
         }
            this.body = Bodies.circle(x,y,20,options);
            this.radius = 2;
            this.image = loadImage("paper(1).png");
            World.add(world, this.body);
           }
    
    
        display(){
           var posi = this.body.position;
           fill("pink");
          image(this.image,posi.x, posi.y, 40,40);
             
        }
    };
    
       
