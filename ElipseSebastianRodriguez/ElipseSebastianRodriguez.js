var canvas;
var tamMinimo;
var tamMaximo;


function setup() {
    canvas = createCanvas(800, 800);
    canvas.position(550, 100);
    background(0);


    tamMinimo = 5;
    tamMaximo = 30;

}

function draw() {

    var aparecer = map(mouseX, 0, width, tamMinimo, tamMaximo);
    x = int(random(canvas.width));
    y = int(random(canvas.height));


    fill("#45B476");
    strokeWeight(2);
    stroke(255);
    ellipse(x, y, aparecer, aparecer);

}