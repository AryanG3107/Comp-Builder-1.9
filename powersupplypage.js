function preload(){
    powerSupplyImage = loadImage("Images/rog550w.png")
    powerSupplyImage2 = loadImage("Images/rog850w.jpg")
    powerSupplyImage3 = loadImage("Images/rog1200w.jpg")
    powerSupplyImage4 = loadImage("Images/evga500w.jpg")
    powerSupplyImage5 = loadImage("Images/evga850w.jpg")
    powerSupplyImage6 = loadImage("Images/evga1000w.jpg")
    powerSupplyImage7 = loadImage("Images/gig450w.jpg")
    powerSupplyImage8 = loadImage("Images/gig850w.jpg")
    powerSupplyImage9 = loadImage("Images/gig1000w.jpg")
    QbotImage = loadImage("Images/Robot.png")
    cpuMenuImage = loadImage("Images/menu.jpg")
}

function setup(){
    createCanvas(1900,950)
    Qbot = createSprite(100,200)
    Qbot.addImage(QbotImage)
    Qbot.scale = 0.5
    powerSupplyButton = new Clickable()
    powerSupplyButton.locate(810,415)
    powerSupplyButton.image = powerSupplyImage
    powerSupplyButton.text = ""
    powerSupplyButton.resize(280,170)
    powerSupplyButton2 = new Clickable()
    powerSupplyButton2.locate(435,415)
    powerSupplyButton2.image = powerSupplyImage5
    powerSupplyButton2.text = ""
    powerSupplyButton2.resize(280,170)
    powerSupplyButton3 = new Clickable()
    powerSupplyButton3.locate(1190,415)
    powerSupplyButton3.image = powerSupplyImage4
    powerSupplyButton3.text = ""
    powerSupplyButton3.resize(280,170)
    powerSupplyButton4 = new Clickable()
    powerSupplyButton4.locate(1190,660)
    powerSupplyButton4.image = powerSupplyImage9
    powerSupplyButton4.text = ""
    powerSupplyButton4.resize(280,170)
    powerSupplyButton5 = new Clickable()
    powerSupplyButton5.locate(1190,175)
    powerSupplyButton5.image = powerSupplyImage8
    powerSupplyButton5.text = ""
    powerSupplyButton5.resize(280,170)
    powerSupplyButton6 = new Clickable()
    powerSupplyButton6.locate(440,175)
    powerSupplyButton6.image = powerSupplyImage6
    powerSupplyButton6.text = ""
    powerSupplyButton6.resize(280,170)
    powerSupplyButton7 = new Clickable()
    powerSupplyButton7.locate(815,175)
    powerSupplyButton7.image = powerSupplyImage7
    powerSupplyButton7.text = ""
    powerSupplyButton7.resize(280,170)
    powerSupplyButton8 = new Clickable()
    powerSupplyButton8.locate(815,660)
    powerSupplyButton8.image = powerSupplyImage2
    powerSupplyButton8.text = ""
    powerSupplyButton8.resize(280,170)
    powerSupplyButton9 = new Clickable()
    powerSupplyButton9.locate(440,660)
    powerSupplyButton9.image = powerSupplyImage3
    powerSupplyButton9.text = ""
    powerSupplyButton9.resize(280,170)

    powersupplyMenu = createSprite(950,500)
    powersupplyMenu.scale = 2
    powersupplyMenu.addImage(cpuMenuImage)
}

function draw(){
    background("blue")
    textSize(20)
    fill("white")
    text("Pick a Power Supply for your PC.", 20,350)
    drawSprites()
    powerSupplyButton.draw()
    powerSupplyButton2.draw()
    powerSupplyButton3.draw()
    powerSupplyButton4.draw()
    powerSupplyButton5.draw()
    powerSupplyButton6.draw()
    powerSupplyButton7.draw()
    powerSupplyButton8.draw()
    powerSupplyButton9.draw()



    powerSupplyButton.onPress = function(){
        window.open("computerpage.html")
    }
    powerSupplyButton2.onPress = function(){
        window.open("computerpage.html")
    }
    powerSupplyButton3.onPress = function(){
        window.open("computerpage.html")
    }
    powerSupplyButton4.onPress = function(){
        window.open("computerpage.html")
    }
    powerSupplyButton5.onPress = function(){
        window.open("computerpage.html")
    }
    powerSupplyButton6.onPress = function(){
        window.open("computerpage.html")
    }
    powerSupplyButton7.onPress = function(){
        window.open("computerpage.html")
    }
    powerSupplyButton8.onPress = function(){
        window.open("computerpage.html")
    }
    powerSupplyButton9.onPress = function(){
        window.open("computerpage.html")
    }
}