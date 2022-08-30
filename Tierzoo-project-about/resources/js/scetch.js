var blob
var foods = []

function setup() {
  createCanvas(displayWidth-10, 450);
  blob = new Blobthing()
  var food = new Food()
  append(foods, food)
}

function draw() {
  background(0);
  foods[0].display()
  blob.display()
  if(mouseIsPressed){
    blob.move(mouseX, mouseY)
  }
}

class Blobthing{
  constructor(){
    this.x = width/2
    this.y = height/2
    this.size = 60
    this.r = random(255)
    this.g = random(255)
    this.b = random(255)
    this.r_dir = 1
    this.g_dir = 1
    this.b_dir = -1
  }
  
  move(mouseX, mouseY){
    if(dist(this.x, this.y, foods[0].x, foods[0].y) < this.size/2){
      foods.pop()
      let new_food = new Food()
      append(foods, new_food)
      this.size += 40 * this.size / 100
    }

    if(this.x > mouseX && this.x - this.size/2 > 0){
      this.x -= 4
    }
    if(this.x < mouseX && this.x + this.size/2 < width){
        this.x += 4
    }

    if(this.y > mouseY && this.y - this.size/2 > 0){
        this.y -= 4
    }
    if(this.y < mouseY && this.y + this.size/2 < height){
        this.y += 4
    }
  }
    
  display(){
    if(this.r > 255 || this.r < 0){
      this.r_dir *= -1
    }
    this.r += 2 * this.r_dir
    
    if(this.g > 255 || this.g < 0){
      this.g_dir *= -1
    }
    this.g += 3 * this.g_dir
    
    if(this.b > 255 || this.b < 0){
      this.b_dir *= -1
    }
    this.b += 5 * this.b_dir
    
    fill(this.r, this.g, this.b)
    circle(this.x, this.y, this.size)
  }
}

class Food{
  constructor(){
    this.x = random(40, width-40)
    this.y = random(40, height-40)
  }
  
  display(){
    fill(255)
    circle(this.x, this.y, 30)
  }
}
