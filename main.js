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
function gotPoses(){
    if(results.length>0){
     console.log(results);   
    }
}
function draw(){
    background('#656e67')
}