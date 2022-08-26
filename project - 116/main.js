nosex=0;
nosey=0;

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createcapture(Video);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotposes);
}
function preload() {
    mustache = loadImage('https://images.app.goo.gl/8ygqSzm83ADUdyHJ6');
}

function draw(){
    Image(video, 0, 0, 300 ,300);
    Image(clown_nose, nosex, nosey, 30, 30);

    circle(noseX, noseY, 20);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded() {
    console.log('posenet is initialized');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        nosex = results[0].pose.nose.x-10
        nosey = results[0].pose.nose.y-10
    }
}