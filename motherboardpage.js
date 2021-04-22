
function preload(){
var motherboardSelection
menuButtonImage = loadImage("Images/motherboard.jpg")
menuButtonImage2 = loadImage("Images/motherboard2.jpg")
menuButtonImage3 = loadImage("Images/motherboard3.jpg")
menuButtonImage4 = loadImage("Images/motherboard4.jpg")
menuButtonImage5 = loadImage("Images/motherboard5.jpg")
menuButtonImage6 = loadImage("Images/motherboard6.jpg")
menuButtonImage7 = loadImage("Images/motherboard7.jpg")
menuButtonImage8 = loadImage("Images/motherboard8.jpg")
menuButtonImage9 = loadImage("Images/motherboard9.jpg")
QbotImage = loadImage("Images/Robot.png")
menuImage = loadImage("Images/menu.jpg")
}

function setup(){
    createCanvas(1900,950)
    motherboardSelection = getItem("motherboard")
    Qbot = createSprite(100,200)
    Qbot.addImage(QbotImage)
    Qbot.scale = 0.5
    menuButton = new Clickable()
    menuButton.locate(810,420)
    menuButton.image = menuButtonImage
    menuButton.text = ""
    menuButton.resize(280,170)
    menuButton2 = new Clickable()
    menuButton2.locate(435,420)
    menuButton2.image = menuButtonImage2
    menuButton2.text = ""
    menuButton2.resize(280,160)
    menuButton3 = new Clickable()
    menuButton3.locate(1190,420)
    menuButton3.image = menuButtonImage3
    menuButton3.resize(280,160)
    menuButton3.text = ""
    menuButton4 = new Clickable()
    menuButton4.locate(1190,660)
    menuButton4.image = menuButtonImage4
    menuButton4.text = ""
    menuButton4.resize(270,170)
    menuButton5 = new Clickable()
    menuButton5.locate(1190,175)
    menuButton5.image = menuButtonImage5
    menuButton5.text = ""
    menuButton5.resize(270,170)
    menuButton6 = new Clickable()
    menuButton6.locate(440,175)
    menuButton6.image = menuButtonImage6
    menuButton6.text = ""
    menuButton6.resize(270,170)
    menuButton7 = new Clickable()
    menuButton7.locate(815,175)
    menuButton7.image = menuButtonImage7
    menuButton7.text = ""
    menuButton7.resize(270,170)
    menuButton8 = new Clickable()
    menuButton8.locate(815,660)
    menuButton8.image = menuButtonImage8
    menuButton8.text = ""
    menuButton8.resize(270,170)
    menuButton9 = new Clickable()
    menuButton9.locate(440,660)
    menuButton9.image = menuButtonImage9
    menuButton9.text = ""
    menuButton9.resize(270,170)
    menuButton.resize(270,170)
    
    
    menu = createSprite(950,500)
    menu.scale = 2
    menu.addImage(menuImage)
}

function draw(){
    background("blue")
    textSize(20)
    fill("white")
    text("Pick a Motherboard for your PC.", 20,350)
    drawSprites()
    menuButton9.draw()
    menuButton8.draw()
    menuButton7.draw()
    menuButton6.draw()
    menuButton5.draw()
    menuButton4.draw()
    menuButton3.draw()
    menuButton2.draw()
    menuButton.draw()
    menuButton.onPress = function(){
        motherboardSelection = this.menuButton
        storeItem("")
        window.open("cpupage.html")
    }
    menuButton2.onPress = function(){
        motherboardSelection = this.menuButton2
        window.open("cpupage.html")
    }
    menuButton3.onPress = function(){
        window.open("cpupage.html")
    }
    menuButton4.onPress = function(){
        window.open("cpupage.html")
    }
    menuButton5.onPress = function(){
        window.open("cpupage.html")
    }
    menuButton6.onPress = function(){
        window.open("cpupage.html")
    }
    menuButton7.onPress = function(){
        window.open("cpupage.html")
    }
    menuButton8.onPress = function(){
        window.open("cpupage.html")
    }
    menuButton9.onPress = function(){
        window.open("cpupage.html")
    }
    console.log(motherboardSelection)
}