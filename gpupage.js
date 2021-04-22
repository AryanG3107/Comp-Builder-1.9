function preload(){
    gpuImage1 = loadImage("Images/rtx3070.png")
    gpuImage2 = loadImage("Images/rtx3080.jpg")
    gpuImage3 = loadImage("Images/rtx3090.jpg")
    gpuImage4 = loadImage("Images/rx580.jpg")
    gpuImage5 = loadImage("Images/rx570.png")
    gpuImage6 = loadImage("Images/rx5600.jpg")
    gpuImage7= loadImage("Images/rtxtitan.png")
    gpuImage8= loadImage("Images/rtxquadro.jpg")
    gpuImage9= loadImage("Images/rx8000.jpg")
    QbotImage = loadImage("Images/Robot.png")
    cpuMenuImage = loadImage("Images/menu.jpg")
}

function setup(){
    createCanvas(1900,950)
    Qbot = createSprite(100,200)
    Qbot.addImage(QbotImage)
    Qbot.scale = 0.5
    gpuButton = new Clickable()
    gpuButton.locate(810,415)
    gpuButton.image = gpuImage1
    gpuButton.text = ""
    gpuButton.resize(280,170)
    gpuButton2 = new Clickable()
    gpuButton2.locate(435,415)
    gpuButton2.image = gpuImage5
    gpuButton2.text = ""
    gpuButton2.resize(280,170)
    gpuButton3 = new Clickable()
    gpuButton3.locate(1190,415)
    gpuButton3.image = gpuImage4
    gpuButton3.text = ""
    gpuButton3.resize(280,170)
    gpuButton4 = new Clickable()
    gpuButton4.locate(1190,660)
    gpuButton4.image = gpuImage9
    gpuButton4.text = ""
    gpuButton4.resize(280,170)
    gpuButton5 = new Clickable()
    gpuButton5.locate(1190,175)
    gpuButton5.image = gpuImage8
    gpuButton5.text = ""
    gpuButton5.resize(280,170)
    gpuButton6 = new Clickable()
    gpuButton6.locate(440,175)
    gpuButton6.image = gpuImage6
    gpuButton6.text = ""
    gpuButton6.resize(280,170)
    gpuButton7 = new Clickable()
    gpuButton7.locate(815,175)
    gpuButton7.image = gpuImage7
    gpuButton7.text = ""
    gpuButton7.resize(280,170)
    gpuButton8 = new Clickable()
    gpuButton8.locate(815,660)
    gpuButton8.image = gpuImage2
    gpuButton8.text = ""
    gpuButton8.resize(280,170)
    gpuButton9 = new Clickable()
    gpuButton9.locate(440,660)
    gpuButton9.image = gpuImage3
    gpuButton9.text = ""
    gpuButton9.resize(280,170)











    gpuMenu = createSprite(950,500)
    gpuMenu.scale = 2
    gpuMenu.addImage(cpuMenuImage)
}

function draw(){
    background("blue")
    textSize(20)
    fill("white")
    text("Pick a Graphics Card for your PC.", 20,350)
    drawSprites()
    gpuButton.draw()
    gpuButton2.draw()
    gpuButton3.draw()
    gpuButton4.draw()
    gpuButton5.draw()
    gpuButton6.draw()
    gpuButton7.draw()
    gpuButton8.draw()
    gpuButton9.draw()


    gpuButton.onPress = function(){
        window.open("powersupplypage.html")
    }
    gpuButton2.onPress = function(){
        window.open("powersupplypage.html")
    }
    gpuButton3.onPress = function(){
        window.open("powersupplypage.html")
    }
    gpuButton4.onPress = function(){
        window.open("powersupplypage.html")
    }
    gpuButton5.onPress = function(){
        window.open("powersupplypage.html")
    }
    gpuButton6.onPress = function(){
        window.open("powersupplypage.html")
    }
    gpuButton7.onPress = function(){
        window.open("powersupplypage.html")
    }
    gpuButton8.onPress = function(){
        window.open("powersupplypage.html")
    }
    gpuButton9.onPress = function(){
        window.open("powersupplypage.html")
    }
}