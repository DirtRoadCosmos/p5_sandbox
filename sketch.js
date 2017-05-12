var img;

function setup() {
  createCanvas(400, 400);
  img = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/768px-Albert_Einstein_Head.jpg");
}

function draw() {
  ellipse(80, 80, 80, 80);
  image(img, 0, height/2, img.width/2, img.height/2);
}
