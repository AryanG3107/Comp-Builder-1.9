var helper, startButton, menu, menuButton, start, motherboardSelection
function preload(){
helper = loadImage("Images/Robot.png")
startButton = loadImage("Images/Button1.gif")
menu = loadImage("Images/menu.jpg")
}

function setup(){
    createCanvas(1900,950)
    start = createA("motherboardpage.html", "Click Here")
    start.position(700,900)
}

function draw(){
    background("green")
    textAlign(CENTER, CENTER)
    textSize(50)
    fill("black")
    stroke("aqua")
    strokeWeight(5)
    text("Welcome to Computer Builder 2.0.", width/2, height/2)
    textSize(30)
    stroke("white")
    strokeWeight(2)
    text("I am Qbot, here to help.", width/2, height/2 + 70)
    //console.log(mouseX, mouseY)
    imageMode(CENTER)
    image(helper, 664,653, 300,250)
    drawSprites()
}
function mouseReleased(){
    menuButton.locate(200,200)
    menuButton.text= "Click Here"
    menuButton.draw()
}
function keyPressed(){
    if(keyCode === 32){
    console.log("Hello")
    clear()
    background(255)
    }
}