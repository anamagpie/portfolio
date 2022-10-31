var destinos=[
    ["Oviedo",        "<img src=https://www.turismoencantabria.com/resources/contenidos/7b7b4347b0b05d1a3c63bed68aad8982.jpg>"],
    ["Torrelavega",   "<img src=https://media.istockphoto.com/photos/the-cathedral-of-oviedo-picture-id597272464?k=20&m=597272464&s=612x612&w=0&h=fgOo3Ikwy43OFBJAcjR53MqG5H7KZ6jHknFC2Z-6KDs=>"],
    ["Lugo",          "<img src=https://media.quincemil.com/imagenes/2020/08/31001351/lugo-1920x1080.jpg>"],
    ["Mieres",        "<img src=https://www.mieres.es/wp-content/uploads/2017/05/Plaza-de-Requejo-Mieres-Fot.-Carlos-Salvo-AF-Semeya.jpg>"],
    ["Alcorcón",      "<img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq1NipkBAmbysZ_WJPMG15FKJTNeyUNYBnUAB5Iwpt&s>"],
    ["París",         "<img src=https://media.istockphoto.com/photos/eiffel-tower-aerial-view-paris-picture-id1145422105?k=20&m=1145422105&s=612x612&w=0&h=IVTtz9ao9ywd5AltRNbr_K64LeuHeJ68J9ivjpztbEs=>"],
    ["Lisboa",        "<img src=https://media.traveler.es/photos/61378053f00fb1ba8d868adc/master/pass/77951.jpg>"],
    ["Barcelona",     "<img src=https://media.istockphoto.com/photos/park-guell-in-barcelona-spain-picture-id148543868?k=20&m=148543868&s=612x612&w=0&h=2pCAExLqNq9rKpCiTKb6Z2YKV-SxM35YG7WQVMimhmQ=>"],
    ["Berlín",        "<img src=https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/elle-berlin-1563797492.jpg?crop=0.563xw:1.00xh;0.219xw,0&resize=640:*>"],
    ["Dublín",        "<img src=http://c3.thejournal.ie/media/2013/08/drunk-girl-ambulance-752x501.jpg>"],
    ["Tokio",         "<img src=https://media.admagazine.com/photos/618a5ef1a8ad6c5249a74d1d/4:3/w_2000,h_1500,c_limit/91683.jpg"],
    ["Abu Dabi",      "<img src=https://a.travel-assets.com/findyours-php/viewfinder/images/res70/48000/48863-Dubai.jpg>"],
    ["Dubai",         "<img src=https://images.musement.com/cover/0002/45/dubai-skyline-at-dusk-jpg_header-144981.jpeg>"],
    ["Bahamas",       "<img src=https://cdn.getyourguide.com/img/location/5dc7f92fd01d4.jpeg/68.jpg>"],
    ["Bora Bora",     "<img src=https://www.kayak.es/rimg/himg/0d/6e/8f/hotelsdotcom-128323-2d2843-359021.jpg?width=1366&height=768&crop=true>"]
  ]
  
  
  function numerorandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  
  function randomPob(){
      var aleatorioPob = numerorandom(0,4);
      document.getElementById("ciudadPob").innerHTML= destinos[aleatorioPob][0];
      document.getElementById("imgPob").innerHTML= destinos[aleatorioPob][1]; 
  }
  
  function randomMed(){
    var aleatorioMed = numerorandom(0,9);      
      document.getElementById("ciudadMed").innerHTML=destinos[aleatorioMed][0];
     document.getElementById("imgMed").innerHTML= destinos[aleatorioMed][1]; 
  
  }
  
  function randomRic(){
    var aleatorioRic = numerorandom(0,14);
        document.getElementById("ciudadRic").innerHTML=destinos[aleatorioRic][0];
     document.getElementById("imgRic").innerHTML= destinos[aleatorioRic][1];
    alert("Si tienes dinero para pagar cualquier viaje, ¿por qué no iba a salir este? Dale una opoortunidad!!");
  
  
  }
  
  
  
  // document.write(numMed);
  
  
  
  /*  var clasemedia = destinos[0]+destinos[1]+destinos[2]+destinos[3]+destinos[4]+destinos[5]+destinos[6]+destinos[7]+destinos[8]+destinos[9]; */