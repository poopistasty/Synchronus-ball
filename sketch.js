var ball;
var ball_pos,pos,data;

function setup(){
    createCanvas(500,500);
    data=firebase.database()
    
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    ball_pos=data.ref("ball/position")
ball_pos.on("value", readPosition, showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(5,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-5);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+5);
    }
    drawSprites();
}

function writePosition(x,y){
    data.ref("ball/position").set({
          x: ball.x + x,
          y: ball.y + y
    })
}
function readPosition(data){
    pos=data.val()
    ball.x=pos.x
    ball.y=pos.y
}
function showError(){
    console.log("error")
}