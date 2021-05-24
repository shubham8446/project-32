class Bird {
    constructor(x, y) {
     
      var options = {
        
        'density':0,
        'friction': 0,
        'restitution':0
      };
      this.body = Bodies.rectangle(x, y, 10, 10, options);
      this.width = 28;
      this.height = 28;
      World.add(world, this.body);
      this.image = loadImage("sprites/hexagon.png");
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
      //Bird.image.display();
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(6);
      stroke('blue')
      fill('red')
      //rectMode(CENTER)
      //rect(0, 0, this.width, this.height);
      imageMode (CENTER) 
      image (this.image,0,0,this.width,this.height)

      pop();
    };
  };
  