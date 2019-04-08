let canvas= document.getElementById('canvas')
let ctx=document.getContext('2d')
let vidas= 3 ;
// voy a manejar vidas puntaje actual puntaje dentro del nivel siempre va a ser cero
let puntajeAct= 0;
//puntaje dentro del juego nunca va a ser cero
let puntajeG= 0;
let nivel= 0;
let boton= document.getElementById('boton');
//para agregarle el evento a mi boton es bueno dividir la interfas grafica y la otra la parte logica para depurar mas facil
boton.addEventListener('click',play)//con este primero paso los eventos primero paso el string y despues paso la funcion sin parentesis porque ya el addevent ya le esta mandando los parametros para devolverle info del juego


//gun
let gun = {
  x: canvas.width/2,
  y:canvas.height-10,
  w: 10,
  h:20,
  img:document.createElement('img'),
  left:false,
  rigth:false,
  speed: 7
  
}
//primero accedo a la variable img de mi objeto gun y src acceso  a la propiedad src de mi objeto img
//primero le tengo que dar una ruta a mi funcion img de mi arma
gun.img.src='ruta'
//funcion para dibujar mi arma
function drawGun(){
  ctx.drawImage(gun.img.this.x,this.y)
  function moveGun(){}
  if(gun.left&& this.x<canvas.width-gun.w){
    gun.this.x+=gun.speed
  } else if (gun.rigth&& this.x>0){
    gun.this.x-=gun.speed
  }
}
//estoy llamando mi funcion de forma anonima directamente ahi estoy poniendo el codigo de la funcion
document.addEventListener('keydown',function(){
  if(event.keyCode==39){
    gun.left=true
  } else if(event.keyCode==37){
    gun.rith=true
  }
  
});
document.addEventListener('keyup',function(){
  if(event.keyCode==39){
    gun.left=false
  } else if(event.keyCode==37){
    gun.rith=false
  }
  
})

function playSound(){}
function aumentarnivel(){}
function drawInfo(){
  ctx.fillStyle='yellow'
  ctx.fillText('vidas restantes'+ vidas,5,15)
  ctx.fillText('nivel:'+ nivel,canvas.width,-50,15)
}
function endGame(){
  
  document.location.reload()//actualizar la pagina se recetea el juego o puedo recetear todas las variables
}



function draw(){
  //nos permite limpiar el canvas para que nos cree el efecto deanimacion
  ctx.clearRect(0,0,canvas.width,canvas.height)
  drawGun()
  drawInfo()
  
}
//cada vez que me mueva quiero actualizar el estado del juego
function actualizar(){
  moveGun()
}
//
function colisiones(){}
// cuadros de juego mi juego se ejecuta en un bucle aqui voy a llamar a todas las funciones este es el motor de todo mi juego 
function frame(){
  function actualizar()
  function colisiones()
  function draw()
  //duda ayuda a arrancar el bucle la llama recursivamente para poder controlar la funcion frame ya que si solo coloco la palabra frame lo va  llamar a la velocidad del procesador
  requestAnimationFrame(frame)
}
//funcion que inicie mi juego
function play(){
  //ocultar mi boton de inicio 
  let modal= document.getElementById('modal')
  modal.css.display='none'
  //arrancar nuestro bucle al llamarlo
  frame()
}
