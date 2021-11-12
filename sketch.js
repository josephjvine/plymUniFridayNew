var canvasSize = 400;

function setup() {
    var canvas = createCanvas(600, 800);
    canvas.parent("p5container");
}

function draw() {

    var eyeX = map(mouseX,0,width, 245, 285);
    var eyeY = map(mouseY,0,height,330,350);
    console.log(mouseX,mouseY);

    background(220);

    fill(255, 255, 0);
    ellipse(width/2, height/2, width/2);

    //eyes
    strokeWeight(4); //stroke colour or fll
    stroke(65);  //stroke thickness
    fill(255);
    ellipse(eyeX,eyeY,50);
    fill(255);
    ellipse(eyeX+100,eyeY,50);

    //cheeks
    noStroke(0)
    fill(255,215,0);
    ellipse((width/2)-95,415,40);

    noStroke(0)
    fill(255,215,0);
    ellipse((width/2)+95,415,40);

    //mouth
    strokeWeight(4); //stroke colour or fll
    stroke(65);  //stroke thickness

    noFill(0)
    arc(width/2,(height/2)+10,180,180,radians(30), radians(150));

    
}