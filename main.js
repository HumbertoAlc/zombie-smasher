const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const images = {
  img1: 'imagenes/fondo.jpg',
  imag2: 'imagenes/negan.png',
  imag3: 'imagenes/mascara.png'
}
const squish=document.createElement('audio')
squish.src='imagenes/squish.mp3'
const zombieFondo=document.createElement('audio')
zombieFondo.src='imagenes/zombiefondo.mp3'


//funciones
class Board{
  constructor(img){
    this.x = 0
    this.y = 0  
    this.width = canvas.width
    this.height = canvas.height
    this.img = new Image()
    this.img.src = img
    this.img.onload = ()=>{
      this.draw() // draw image when image has alredy charged
    }
  }
  // METHOD
  draw(){
    
    ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
    
  
  }
}

/////CLASS mira ////////
class Character {
  constructor(x,y,img){
    this.x = x
    this.y = y
    this.img = new Image()
    this.img.src = img
    this.img.onload = ()=>{
    this.draw() // draw image when image has alrady charged
    }
  }
  draw(){
    ctx.drawImage(this.img,this.x,this.y,50,50)
  }
  
  moveRight(){
    this.x+=10
    if(this.x>canvas.width-50)this.x=canvas.width-50

  }
  
  moveLeft(){
    this.x-=10
    if(this.x<0)this.x=0
  }
  
  moveUp(){
    this.y-=10
    if(this.y<0)this.y=0
  }
  
  moveDown(){
    this.y+=10
    if(this.y>canvas.height-50)this.y=canvas.height-50
  }
  isTouching(zombie){
    
    return (this.x < zombie.x + zombie.width) &&
    (this.x + 15  > zombie.x) &&
    (this.y < zombie.y + zombie.height) &&
    (this.y + 15 > zombie.y)
  }
}

const board = new Board(images.img1)
const mira = new Character(280,200,images.imag2)
const mira2 = new Character(320,200,images.imag2)


let frames = 0
let interval

function update() {
  ctx.clearRect(0,0,canvas.width,canvas.height)
  board.draw()
  
   
  frames++ 
  
  generateZombies();
  drawZombies();
  mira.draw();
  mira2.draw();
  drawInfo();
  checkCollition();
  
}

function startGame(){
  if(interval) return
  interval = setInterval(update,1000/60)
}

// EVENT 
addEventListener('keydown',e =>{
  switch(e.keyCode){
    case 32:
      startGame()
      playSound(zombieFondo)
      break
    case 39:
      return mira.moveRight()
      break
    case 37:
      return mira.moveLeft()
      break
    case 38:
      return mira.moveUp()
      break
    case 40:
      return mira.moveDown()
      break
  }
})
addEventListener('keydown',e =>{
  switch(e.keyCode){
    
    case 68:
      return mira2.moveRight()
      break
    case 65:
      return mira2.moveLeft()
      break
    case 87:
      return mira2.moveUp()
      break
    case 83:
      return mira2.moveDown()
      break
  }
})



//helper zombies

class Zombies {
  constructor(x, y = 0) {
    this.x = x
    this.y = y
    this.width = 20
    this.height = 50
    this.img1 = new Image()
    this.img1.src = 'imagenes/mascara.png'
  }
  draw() {
  
      ctx.drawImage(this.img1,this.x,this.y,50,50)
    
    this.y++
    if (this.y>400 && vidas === 0) gameOver()
    if(this.y===400) vidas--
    
     
  }
}
function gameOver() {
  clearInterval(interval)
  ctx.font = '60px serif'
  ctx.fillText('Perdedor', 200, 150)
zombieFondo.pause();
}

let obstacles=[]
function generateZombies(){

  let randomWidth = Math.floor(Math.random() * canvas.height) 
  if (frames % 80 === 0) {
    let obs1 = new Zombies(randomWidth,0)
    
    obstacles.push(obs1)
    
  }
}

function drawZombies() {
  obstacles.forEach(obstacle => {
    obstacle.draw()
  })
}

function checkCollition(){
  obstacles.forEach((zombie, i) =>  {
    
   if (mira.isTouching(zombie) || mira2.isTouching(zombie)) {
     
     puntajeActual +=5
  
    obstacles.splice(i,1);
    playSound(squish);
  
   } 
  })
}
let vidas=3;
let puntajeActual=0;

function drawInfo(){
  ctx.font = '15px serif';
  ctx.fillStyle='red';
  ctx.fillText('Vidas restantes :'+ vidas, 10, 30);
  ctx.fillText('Puntaje:'+ puntajeActual, 500, 30);
}

function playSound(s){
  s.currentTime=0;
  s.play();
}







/*
let puntajeG= 0;
let nivel= 0;
let boton= document.getElementById('boton');
//para agregarle el evento a mi boton es bueno dividir la interfas grafica y la otra la parte logica para depurar mas facil

//boton.addEventListener('click',play)//con este primero paso los eventos primero paso el string y despues paso la funcion sin parentesis porque ya el addevent ya le esta mandando los parametros para devolverle info del juego





function endGame(){
  
  document.location.reload()//actualizar la pagina se recetea el juego o puedo recetear todas las vari



//funcion que inicie mi juego
function play(){
  //ocultar mi boton de inicio 
 // let modal = document.getElementById('modal')
  //modal.style.display='none'
*/