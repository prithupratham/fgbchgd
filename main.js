
function setup() {
    video = createCapture(VIDEO);
    video.size(550,600);
    video.position(10,60);


    canvas =  createCanvas(600,440);
    canvas.position(600,130);


    poseNet = ml5.poseNet(video, modelLoaded);




    poseNet.on('pose', gotPoses);
}
function gotPoses(results) {
    if (results.length > 0) 
    {
         console.log(results);
    } 


   
    
}

function modelLoaded() {
    console.log('poseNet is intialized');
}


function draw(){
  background('#66b2ff');
}