canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var rover_width = 120;
var rover_height = 70;
var rx = 10;
var ry = 10;
var background_img= "racing.jpg";
var rover_image = "car1.png";
var cw  = 120; 
var ch = 70;
var car2 = "animated-car-clipart-10.png"
cx = 10;
cy = 100;
function add(){
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src =background_img;

rover_imgTag = new Image();
rover_imgTag.onload = uploadrover;
rover_imgTag.src = rover_image;

car_imgTag = new Image();
car_imgTag.onload = uploadcar;
car_imgTag.src = rover_image;
}

function uploadBackground(){
   ctx.drawImage(background_imgTag, 0, 0, canvas.width,canvas.height);
}

function uploadcar(){
   ctx.drawImage(car_imgTag, cx, cy,  cw, ch);
}
function uploadrover(){
    ctx.drawImage(rover_imgTag, rx, ry, rover_width, rover_height);
 }
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
   keyPressed = e.keyCode;
   console.log(keyPressed);
   if(keyPressed == '37')
   {
       left();
       console.log("left");
   }
   if(keyPressed == '39')
   {
       right();
       console.log("right");
   }
   if (keyPressed == '38')
{
   up();
   console.log("up");
}
if(keyPressed == '40')
{
   down();
   console.log("down");
}

}

function up()
{
    if(ry>=0)
    {
        ry-=10;
        console.log("When up arrow is pressed =" + rx + " - "+ry);
        uploadBackground();
        uploadrover();
    uploadcar();
      }
}
function down()
{
    if(ry<=500)
    {
        ry+=10;
        console.log("When down arrow is pressed, x =" + rx + "| y = " + ry);
        uploadBackground();
        uploadrover();
    uploadcar();
      }
}
function left()
{
    if(rx >=0)
    {
        rx-=10;
        console.log ("When left arrow is pressed, x ="+rx +"| y = " +ry);
        uploadBackground();
        uploadrover();
    uploadcar();
      }
}
function right()
{
    if(rx<=800)
    {
        rx+=10;
        console.log("When right arrow is pressed, x =" +rx +"| y = "+ry);
        uploadBackground();
        uploadrover();
    uploadcar();
      }
}
window.addEventListener("keypressed",my_keypressed)
function my_keypressed(e){
   keyPressed = e.keyCode;
   console.log(keyPressed);
if(keyPressed == '87'){
   straight();
console.log("Foward");
}
if (keyPressed == '83'){
   backward();
   console.log("Backward");
}
if(keyPressed == '68'){
D();
   console.log("Left");
}
if(keyPressed == '65'){
   A();
   console.log("Right");
}
}
function straight()
{
    if(cy>=0)
    {
        cy-=10;
        console.log("When W key is pressed =" + cx + " - "+cy);
        uploadBackground();
        uploadcar();
    uploadrover();
      }
}
function  backward()
{
    if(cy<=500)
    {
        cy+=10;
        console.log("When S key is pressed, x =" + cx + "| y = " + cy);
        uploadBackground();
        uploadcar();
    uploadrover();
      }
}
function D()
{
    if(cx >='0')
    {
        cx-=10;
        console.log ("When D key is pressed, x ="+cx +"| y = " +cy);
        uploadBackground();
        uploadcar();
    uploadrover();
      }
}
function A()
{
    if(cx<=800)
    {
        cx+=10;
        console.log("When  A key is pressed, x =" +cx +"| y = "+cy);
        uploadBackground();
        uploadcar();
    uploadrover();
      }
}