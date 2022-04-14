narizX="";
narizY="";

//-----------------CLASE 114----------------
function preload() { 
  nariz = loadImage('cerdito.png');
}

function setup() {
    //guardamos el lienzo creado en una variable
  lienzo = createCanvas(300, 300);
  lienzo.center();
  //create capture es la funcion para acceder a la camara
  video = createCapture(VIDEO);
  video.size(300,300);
  //video.hide permite que veamos la camara en movimiento, al quitarlo se ve como una foto y no video
  video.hide();

  poseNet= ml5.poseNet(video,modelocargado);
  poseNet.on('pose',gotPoses);
}

function draw() {
  image(video, 0, 0, 300, 300);
  //tint es funcion de p5 para configurar el color del lienzo
  image(nariz, narizX, narizY, 50, 50);
  
  //para las lineas
  fill(126, 241, 83);
  stroke(31, 109, 2);
  
  rect(0,0,500,20);
  rect(0,280,500,20);
  rect(280,0,20,500);
  rect(0,0,20,500);

  //para los circulos
  fill(250, 250, 106);
  stroke(197, 133, 5);

  circle(290, 290, 40);
  circle(10, 10, 40);
  circle(10, 290, 40);
  circle(290, 10, 40);
}

function tomarfoto(){    
    //save es funcion de p5 para guardar fotos o imagenes
  save('foto_con_filtro.png');
}


//---------------CLASE 115------------------
function modelocargado() {
  console.log('PoseNet se ha iniciado');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    narizX = results[0].pose.nose.x-25;
    narizY = results[0].pose.nose.y-25;
  }
}






