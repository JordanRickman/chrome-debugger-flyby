function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // You can't set a brekpoint on a comment line!
  myFunction();
  circle(200,200,100);
}

var c;
var counter = 1;
function myFunction() {
  console.log("I'm a function!");
  let x = 5;
  y = 2; // global variable
  c = "Amessagethatwillneverbedisplayed."; // "Script" variable
  let d = "WastingCPUcyclesoverhere.";
  let z = (x - y) * (c + d);
  counter++;
}