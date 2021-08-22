var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);
  redBtn = createButton("RED")  ;
  redBtn.position(100,50);
  redBtn.mousePressed(red_bg)

   greeenBtn = createButton("GREEN")  ;
   greeenBtn.position(300,50);
   greeenBtn.mousePressed(green_bg)
}

function draw() {
  background(r,g,b);
}
function red_bg(){
r = 255;
g = 0;
b = 0;
  
}
function green_bg(){
  r = 0;
  g = 255;
  b = 0;
  
}

