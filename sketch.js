var font;
var vehicles = [];

function preload() {
  font = loadFont('DSEG14Classic-Regular.ttf');
}

function setup() {
  createCanvas(1100, 300);
  background(255);

  var dots = font.textToPoints('iammrvilla', 100, 200, 100, {
    sampleFactor: 1.20
  });

  for (var i = 0; i < dots.length; i++) {
    var pt = dots[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
}

function draw() {
  background(0);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}
