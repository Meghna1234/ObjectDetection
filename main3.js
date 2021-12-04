img =""
status = ""
objects = [];

function preload(){
    img = loadImage('tealtv.jpg');
}

function setup(){
    canvas = createCanvas(600,400)
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Objects"
    }
    
    function modelLoaded(){
    console.log("Model is Initialized")
    status = true
    objectDetector.detect(img, gotResult); 
    }
    
    function gotResult(error, results){
        if(error){
        console.log(error);
    }
    console.log(results)
    }


function draw(){
image(img, 0,0,600,400);

if(status != "")
{
for(i=0; i<objects.length; i++){
document.getElementById("status").innerHTML ="Detecting Objects"

fill("#FF0000");
percent = floor(objects[i].confidence*100);
text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y)
noFill();
stroke("#FF0000");
rect(objects[i].x-25, objects[i].y-15, objects[i].width+30, objects[i].height+30)
}
}


function back(){
    window.location = "index.html"
}