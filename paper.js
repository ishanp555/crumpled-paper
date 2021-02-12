class paper {
   constructor(x,y,radius){
       options = {
           restitution:0.2,
           friction:0.3,
           density:1.0
           
       }
       this.radius=radius;
       this.body = body.circle(x,y,radius,options)
       world.add(world,this.body)
   }
    display(){
        fill("blue")
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.radius)
    }

}