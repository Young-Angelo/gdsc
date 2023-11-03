/*

// this class describes the properties of a single particle.
class Particle {
    // setting the co-ordinates, radius and the
    // speed of a particle in both the co-ordinates axes.
      constructor(){
        this.x = random(0,width);
        this.y = random(0,height);
        this.r = random(1,8);
        this.xSpeed = random(-2,2);
        this.ySpeed = random(-1,1.5);
      }
    
    // creation of a particle.
      createParticle() {
        noStroke();
        fill('rgba(200,169,169,0.5)');
        circle(this.x,this.y,this.r);
      }
    
    // setting the particle in motion.
      moveParticle() {
        if(this.x < 0 || this.x > width)
          this.xSpeed*=-1;
        if(this.y < 0 || this.y > height)
          this.ySpeed*=-1;
        this.x+=this.xSpeed;
        this.y+=this.ySpeed;
      }
    
    // this function creates the connections(lines)
    // between particles which are less than a certain distance apart
      joinParticles(particles) {
        particles.forEach(element =>{
          let dis = dist(this.x,this.y,element.x,element.y);
          if(dis<85) {
            stroke('grey');
            line(this.x,this.y,element.x,element.y);
          }
        });
      }
    }
    
    // an array to add multiple particles
    let particles = [];
    
    function setup() {
      createCanvas(windowWidth, windowHeight);
      for(let i = 0;i<width/10;i++){
        particles.push(new Particle());
      }
    }
    
    function draw() {
      background('white');
      for(let i = 0;i<particles.length;i++) {
        particles[i].createParticle();
        particles[i].moveParticle();
        particles[i].joinParticles(particles.slice(i));
      }
    }
     
*/   const particles = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    
    const particlesLength = Math.floor(window.innerWidth / 20);
    
    for (let i = 0; i < particlesLength; i++) {
        particles.push(new Particle());     
    }
}

function draw() {
    background('white');
    particles.forEach((p, index) => {
        p.update();
        p.draw();
        p.checkParticles(particles.slice(index));
        p.repel();
    })
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

class Particle {
    constructor() {
        //POSITION
        this.pos = createVector(random(width), random(height));
        //VELOCITY
        this.vel = createVector(random(-1, 1), random(-1, 1));
        //SIZE
        this.size =2;

        this.r = random(0, 255);
        this.g = random(0, 255);
        this.b = random(0, 255);
    }

    //Update movement by adding velocity
    update(){
        this.pos.add(this.vel);
        this.edges();
    }

    //draw single particle
    draw() {
        strokeWeight(.5);
        
        fill(this.r,this.g, this.b)
        circle(this.pos.x, this.pos.y, this.size);
    }

    //Detect edges
    edges() {
        if(this.pos.x < 0 || this.pos.x > width) {
            this.vel.x *= -1;
        }
        if(this.pos.y < 0 || this.pos.y > height) {
            this.vel.y *= -1;
        }
    }

    // Connect particles
    checkParticles(particles) {
        particles.forEach(particle => {
            const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
            if (d < 120) {
                stroke(this.r,this.g, this.b);
                line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y)
            }
        });
    };

    repel() {
        this.pos.x = constrain(this.pos.x, 0, width);
        this.pos.y = constrain(this.pos.y, 0, height);
        let distance = dist(this.pos.x, this.pos.y, mouseX, mouseY);
        let mouse = createVector(mouseX, mouseY);
        let difference = p5.Vector.sub(mouse, this.pos);
        difference.setMag(1);
        //If the mouse comes near a particle, it moves away
        if (distance < 200) {
          this.pos.sub(difference);
        }
      }
}
 
