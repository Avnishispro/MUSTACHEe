function setup() { canvas = createCanvas(300, 300);
     canvas.center(); video = createCapture(VIDEO);
     video.size(300, 300);
      video.hide();
       poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on('pose', gotPoses); 
    } function modelLoaded() { console.log('PoseNet Is Initialized');


 }
nosex=0
nosey=0
function preload(){
    lol_img=loadImage("https://i.postimg.cc/3rP54HTp/th-1-removebg-preview-1.png")
}
 function take_snapshot(){ save('myFilterImage.png'); }
function draw(){
    image(video,0,0,300,300)
    image(lol_img,nosex,nosey,100,100)
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
        console.log("nosex: "+results[0].pose.nose.x)
        console.log("nosey: "+results[0].pose.nose.y)
        nosex=results[0].pose.nose.x-45
        nosey=results[0].pose.nose.y-10

    }
}