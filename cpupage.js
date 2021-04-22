function preload(){
    cpuImage = loadImage("Images/cpu1.jpg")
    cpuImage2 = loadImage("Images/cpu2.jpg")
    cpuImage3 = loadImage("Images/cpu3.png")
    cpuImage4 = loadImage("Images/cpu4.jpg")
    cpuImage5 = loadImage("Images/cpu5.jpg")
    cpuImage6 = loadImage("Images/cpu6.jpg")
    cpuImage7 = loadImage("Images/cpu7.jpg")
    cpuImage8 = loadImage("Images/cpu8.jpg")
    cpuImage9 = loadImage("Images/cpu9.jpg")
    QbotImage = loadImage("Images/Robot.png")
    cpuMenuImage = loadImage("Images/menu.jpg")
}

function setup(){
    createCanvas(1900,950)
    Qbot = createSprite(100,200)
    Qbot.addImage(QbotImage)
    Qbot.scale = 0.5
    cpuButton = new Clickable()
    cpuButton.locate(810,415)
    cpuButton.image = cpuImage
    cpuButton.text = ""
    cpuButton.resize(280,170)
    cpuButton2 = new Clickable()
    cpuButton2.locate(435,415)
    cpuButton2.image = cpuImage5
    cpuButton2.text = ""
    cpuButton2.resize(280,170)
    cpuButton3 = new Clickable()
    cpuButton3.locate(1190,415)
    cpuButton3.image = cpuImage4
    cpuButton3.text = ""
    cpuButton3.resize(280,170)
    cpuButton4 = new Clickable()
    cpuButton4.locate(1190,660)
    cpuButton4.image = cpuImage9
    cpuButton4.text = ""
    cpuButton4.resize(280,170)
    cpuButton5 = new Clickable()
    cpuButton5.locate(1190,175)
    cpuButton5.image = cpuImage8
    cpuButton5.text = ""
    cpuButton5.resize(280,170)
    cpuButton6 = new Clickable()
    cpuButton6.locate(440,175)
    cpuButton6.image = cpuImage6
    cpuButton6.text = ""
    cpuButton6.resize(280,170)
    cpuButton7 = new Clickable()
    cpuButton7.locate(815,175)
    cpuButton7.image = cpuImage7
    cpuButton7.text = ""
    cpuButton7.resize(280,170)
    cpuButton8 = new Clickable()
    cpuButton8.locate(815,660)
    cpuButton8.image = cpuImage2
    cpuButton8.text = ""
    cpuButton8.resize(280,170)
    cpuButton9 = new Clickable()
    cpuButton9.locate(440,660)
    cpuButton9.image = cpuImage3
    cpuButton9.text = ""
    cpuButton9.resize(280,170)


    cpuMenu = createSprite(950,500)
    cpuMenu.scale = 2
    cpuMenu.addImage(cpuMenuImage)
}


function draw(){
    background("blue")
    textSize(20)
    fill("white")
    text("Pick a CPU for your PC.", 20,350)
    drawSprites()
    cpuButton.draw()
    cpuButton2.draw()
    cpuButton3.draw()
    cpuButton4.draw()
    cpuButton5.draw()
    cpuButton6.draw()
    cpuButton7.draw()
    cpuButton8.draw()
    cpuButton9.draw()


    cpuButton.onPress = function(){
        window.open("gpupage.html")
    }
    cpuButton2.onPress = function(){
        window.open("gpupage.html")
    }
    cpuButton3.onPress = function(){
        window.open("gpupage.html")
    }
    cpuButton4.onPress = function(){
        window.open("gpupage.html")
    }
    cpuButton5.onPress = function(){
        window.open("gpupage.html")
    }
    cpuButton6.onPress = function(){
        window.open("gpupage.html")
    }
    cpuButton7.onPress = function(){
        window.open("gpupage.html")
    }
    cpuButton8.onPress = function(){
        window.open("gpupage.html")
    }
    cpuButton9.onPress = function(){
        window.open("gpupage.html")
    }
    
}