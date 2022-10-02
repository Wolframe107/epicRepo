let r = 242;
let r_dir = 1;
let g = 245;
let g_dir = -1;
let b = 66;
let scale = 4;

function preload() {
  roffe = loadImage("resources/roffe.jpg");
  kyck = loadImage("resources/kyckling.jpg");
  alli = loadImage("resources/alli.jpg");
  mille = loadImage("resources/mille.jpg");
  soundFormats('mp3', 'ogg');
  mySound = loadSound('resources/morris.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scale = width / 4;
  mySound.play();
}

function draw() {
  background(r, g, b);
  textSize(width / 10);
  textAlign(CENTER);
  text("Morris-quizet!! :)", width / 2, height / 2 - 300);
  textSize((0.7 * width) / 10);
  text("Vilket djur ska bort?", width / 2, height / 2 - 230);
  textSize((0.5 * width) / 10);
  textStyle(ITALIC);
  text(
    "du måste ge en anledning innan du trycker!",
    width / 2,
    height / 2 - 190
  );

  //print(scale)

  image(roffe, width / 2 - scale - 20, height / 2 - 100, scale, scale);
  image(kyck, width / 2 + 20, height / 2 - 100, scale, scale);
  image(alli, width / 2 - scale - 20, height / 2 + scale - 50, scale, scale);
  image(mille, width / 2 + 20, height / 2 + scale - 50, scale, scale);

  r += 1 * r_dir;
  g += 0.5 * g_dir;
  if (r > 255 || r < 100) {
    r_dir *= -1;
  }

  if (g > 255 || g < 100) {
    g_dir *= -1;
  }
}

function mousePressed() {
  if (
    mouseX > width / 2 - scale - 20 &&
    mouseX < width / 2 - 20 &&
    mouseY > height / 2 - 100 &&
    mouseY < height / 2 - 100 + scale
  ) {
    window.open("https://youtu.be/WINtrEZThKU");
    //print("roffe")
  }

  if (
    mouseX > width / 2 + 20 &&
    mouseX < width / 2 + 20 + scale &&
    mouseY > height / 2 - 100 &&
    mouseY < height / 2 - 100 + scale
  ) {
    window.open("https://youtu.be/cnKYVPGllZk");
    //print("kyck")
  }

  if (
    mouseX > width / 2 - scale - 20 &&
    mouseX < width / 2 - 20 &&
    mouseY > height / 2 + scale - 50 &&
    mouseY < height / 2 + 2 * scale - 50
  ) {
    window.open("https://youtu.be/GwiNe6787GE");
  }

  if (
    mouseX > width / 2 + 20 &&
    mouseX < width / 2 + 20 + scale &&
    mouseY > height / 2 + scale - 50 &&
    mouseY < height / 2 + 2 * scale - 50
  ) {
    window.open("https://youtu.be/RiEsUhoqdeI");
    //print("mille")
  }
}
