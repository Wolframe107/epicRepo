let blinking = 0;

var sketch = function (p) {
  let counter = 2000;
  let startup = 1;
  let upper_control = 50;
  let below_control = 50;
  let start;

  p.setup = function () {
    let canvas = p.createCanvas(200, 100);
    canvas.parent("sketch1")
    p.eyes = [];
    p.eyes.push(new p.Eye(100, 50, 100, p.width / 5));
  };

  p.draw = function () {
    if (p.millis() > 1000) {
      if (startup == 1) {
        p.strokeWeight(6);
        if (upper_control >= 420 && below_control <= -320) {
          startup = 0;
        }

        p.curve(-10,upper_control,0,50,p.width,50,p.width + 10,upper_control);
        p.curve(-10, below_control, 0, 50, p.width, 50, p.width + 10, below_control);
        upper_control += 20;
        below_control -= 20;
      } else {
        if (blinking == 0) {
          if (p.millis() > counter && p.floor(p.random(1000)) == 42) {

            blinking = 1;
            start = p.millis();
            counter += 2000;
          } else {
            p.eyes.forEach((eye) => {
              eye.show();
              eye.eyeTrack();
            });
          }
        } else {
          p.clear()
          p.line(0, 50, 200, 50)
          if(p.millis() - start > 200){
            start = 9999999999999999999999999
            blinking = 0
          }
          
        }
      }
    }
  };

  p.Eye = class {
    constructor(x, y, eyeSize, pSize) {
      this.x = x;
      this.y = y;
      this.eyeSize = eyeSize;
      this.pSize = pSize;

      this.pX = 100;
      this.pY = 50;
    }

    show() {
      p.fill(255);
      p.strokeWeight(6);

      p.curve(-10, 420, 0, this.y, p.width, this.y, p.width + 10, 420);
      p.curve(-10, -320, 0, this.y, p.width, this.y, p.width + 10, -320);

      p.fill(0);
      p.circle(this.pX, this.pY, this.pSize);
    }

    eyeTrack() {
      if (p.mouseX == 0 && p.mouseY == 0) {
        this.pX = 100;
        this.pY = 50;
      }

      if (p.dist(p.mouseX, p.mouseY, this.x, this.y) <= this.eyeSize / 4) {
        this.pX = p.mouseX;
        this.pY = p.mouseY;
      } else {
        let v = p.asin(
          (this.x - p.mouseX) / p.dist(this.x, this.y, p.mouseX, p.mouseY)
        );

        if (p.mouseX > this.pX && this.pX < 125) {
          this.pX += 2;
        }
        if (p.mouseX < this.pX && this.pX > 75) {
          this.pX -= 2;
        }

        if(p.mouseY>this.pY && this.pY < 75){
              this.pY += 2 
        }
        if(p.mouseY<this.pY && this.pY > 40){
              this.pY -= 2
        }
      }
    }
  };
};

var myp5 = new p5(sketch);
