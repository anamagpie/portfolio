/*AquI creo una variable individual para cada imagen*/
var imagen1="img/002.jpg";
var imagen2="img/003.jpg";
var imagen3="img/004.jpg";
var imagen4="img/005.jpg";
var imagen5="img/006.jpg";
var imagen6="img/007.jpg";
var imagen7="img/008.jpg";
var imagen8="img/001.jpg";

/*Creo una variable mas para nombrar a las anteriores mas adelante dentro de la funcion*/
var luna;

/*Le doy un valor a la variable foto, en este caso 0*/
var foto = 0;

/*Creo una funcion que sume 1 cuando haces click en el boton siguiente*/
function siguiente(){
  if(foto==0){
    luna = imagen1;
    foto++;
  }
  
  else if(foto==1){
    luna = imagen2;
    foto++;
  }
  
  else if(foto==2){
    luna = imagen3;
    foto++;
  }
  
  else if(foto==3){
    luna = imagen4;
    foto++;
  }

  else if(foto==4){
    luna = imagen5;
    foto++;
  }
  
  else if(foto==5){
    luna = imagen6;
    foto++;
  }

  else if(foto==6){
    luna = imagen7;
    foto++;
  }
  /*Salvo en el ultimo else if donde en vez de sumar uno vuelve a 0*/
  else if(foto==7){
    luna = imagen8;
    foto=0;
  }
/*Y sale por pantalla gracias a la Id que esta en HTML*/
  document.getElementById('fase').src = luna;
}

/*Creo una funcion que reste 1 para el boton "antes"*/
function anterior(){
  
  /*Salvo el if donde en vez de restar uno vuelve a la ultima imagen*/
  if(foto==7){
    luna = imagen8;
    foto--;
  }
  
  else if(foto==6){
    luna = imagen7;
    foto--;
  }
  
  else if(foto==5){
    luna = imagen6;
    foto--;
  }

  else if(foto==4){
    luna = imagen5;
    foto--;
  }

  else if(foto==3){
    luna = imagen4;
    foto--;
  }

  else if(foto==2){
    luna = imagen3;
    foto--;
  }

  else if(foto==1){
    luna = imagen2;
  foto--;
  }

  else if(foto==0){
    luna = imagen1;
    foto=7;
  }
  
  
/*Y vuelvo a sacar por pantalla gracias al Id de HTML :) */
  document.getElementById('fase').src= luna;
}