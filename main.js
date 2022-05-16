leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
      video = createCapture(VIDEO);
      video.size(550, 550);
      canvas = createCanvas(550, 500);
      canvas.position(560, 110);
      poseNet = ml5.poseNet(video, modelLoaded);
      poseNet.on('pose',  gotPoses);
}

function gotPoses(results) {
      if (results.length > 0) {
            console.log(results);
            leftWristX = results[0].pose.leftWrist.x;
            rightWristX = results[0].pose.rightWrist.x;
            difference = floor(leftWristX - rightWristX);
            document.getElementById("text_size").innerHTML =  "Font size of the text will be " + difference + "px.";
      }
}

function modelLoaded() {
      console.log('PoseNet is initialised!');
}

function draw() {
      background('#9ACD32');
      textSize(difference);
      fill('#000000');
      text('Hello World', 125, 300);

}