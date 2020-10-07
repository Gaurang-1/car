//variables
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
width=180;
height=90;
rover1_x=10;
rover1_y=100;
rover_x=10;
rover_y=10;
background_image="download.jpg";
rover_image="car1.png";
rover1_image="2.png"
//function add
function add(){
    background_image_tag=new Image();
    background_image_tag.onload=uploadBackground;
    background_image_tag.src=background_image;
    rover_image_tag=new Image();
    rover_image_tag.onload=uploadRover;
    rover_image_tag.src=rover_image;
    rover1_image_tag=new Image();
    rover1_image_tag.onload=uploadRover1;
    rover1_image_tag.src=rover1_image;
}
//function backgrnd upload
function uploadBackground(){
    ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);
    }
//function upload rover
function uploadRover(){
    ctx.drawImage(rover_image_tag,rover_x,rover_y,width,height);
}
function uploadRover1(){
    ctx.drawImage(rover1_image_tag,rover1_x,rover1_y,width,height);
}
//identifying keys
window.addEventListener("keydown",my_keydown);
function my_keydown (e){
   keyPressed=e.keyCode;
   if(keyPressed=='38'){
       up();
       console.log("up is pressed");
   }
   if(keyPressed=='37'){
       left();
       console.log('left key is pressed');
   } 
   if(keyPressed=='39'){
       right();
       console.log("right key is pressed");
   }
   if(keyPressed=='40'){
       down();
       console.log("down key is pressed");
   }
   if(keyPressed=='87'){
    up1();
    console.log("up1 is pressed");
}
  if(keyPressed=='83'){
    left1();
    console.log('left key is pressed');
} 
if(keyPressed=='65'){
    right1();
    console.log("right key is pressed");
}
if(keyPressed=='68'){
    down1();
    console.log("down key is pressed");
}
}  