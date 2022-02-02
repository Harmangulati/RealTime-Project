
difference=0;
leftWristX=0;
rightWristX=0;
function setup(){
  canvas=createCanvas(550,550);
  canvas.position(560,150);
  video=createCapture(VIDEO);
  poseNet=ml5.poseNet(video,modelLoaded);
video.size(550,500);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
  console.log("PoseNet is Initialized");  
}
function gotPoses(results){
    if(results.length>0){
     console.log(results); 
  leftWristX=results[0].pose.leftWrist.x; 
  rightWristX=results[0].pose.rightWrist.x; 
  difference= floor(leftWristX-rightWristX);
  console.log("leftWristX= "+leftWristX+" rightWristX= "+rightWristX+" difference= "+difference);  
    }
}
function draw(){
    background('#656e67')
      document.getElementById("text").innerHTML="Width and Height of text will be= "+difference+"px";
      textSize(difference);
      fill("#21dbd2");
      stroke("#21dbd2");
    text('Harman',50,400);
}