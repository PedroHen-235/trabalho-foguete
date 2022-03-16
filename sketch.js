var foguete, fogueteimg
var galaxia, galaxiaimg
var meteoro, meteoroimg, meteorogroup



function preload(){
galaxiaimg = loadImage ("galaxia.jpg")
fogueteimg = loadImage ("foguete.png")
meteoroimg = loadImage ("meteoro.png")

}

function setup() {
 createCanvas(600,600)
 
 galaxia = createSprite(300,300);
 galaxia.addImage("galaxia",galaxiaimg);
 galaxia.velocityY = 4;

foguete = createSprite(400,400)
foguete.addImage("foguete", fogueteimg)
foguete.scale = 0.09


meteorogroup = new Group()
}
function draw() {
drawSprites()
if(galaxia.y > 400){
  galaxia.y = 300
}
if(keyDown("right")){
foguete.x = foguete.x +4
}
if(keyDown("left")){
foguete.x = foguete.x -4
}
if(keyDown("up")){
foguete.y = foguete.y -4
}
if(keyDown("down")){
foguete.y = foguete.y +4
}

{
  meteoro()
}
}
function meteoro(){
if(frameCount%60 === 0){
  meteoro = createSprite(200,+30)
  meteoro.addImage (meteoroimg)
  meteoro.velocityY = + 7
  meteoro.scale = 0.2
  meteoro.x = Math.round (random(80,400))
  meteoro.lifetime = 700
  meteorogroup.add (meteoro)
}

}
