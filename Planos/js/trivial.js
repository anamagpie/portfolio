var preguntas = ["<ul id='gene'> <img src='img/general.jpg' alt=''> <li onclick='correcto0()'>Plano General</li>  <li onclick='mal()'>Plano Medio</li>  <li onclick='mal()'>Primer Plano</li>  <li onclick='mal()'>Plano Máximo</li> </ul> <div id='calificacion0'></div>",
                "<ul id='prime'> <img src='img/primer plano.jpg' alt=''> <li onclick='mal()'>Plano Detalle</li> <li onclick='mal()'>Plano Lejano</li><li onclick='correcto1()'>Primer Plano</li> <li onclick='mal()'>Plano Mínimo/li> </ul> <div id='calificacion1'></div>",
                "<ul id='deta'> <img src='img/detalle.jpg' alt=''> <li onclick='mal()'>Plano 3/4</li> <li onclick='correcto2()'>Plano Detalle</li> <li onclick='mal()'>Primer Plano</li> <li onclick='mal()'>Plano Ancho</li> </ul> <div id='calificacion2'></div>",
                "<ul id='amer'> <img src='img/americano.jpg' alt=''> <li onclick='mal()'>Plano Detalle</li> <li onclick='correcto3()'>Plano Americano</li> <li onclick='mal()'>Primer Plano</li> <li onclick='mal()'>Plano General</li> </ul> <div id='calificacion3'></div>",
                "<ul id='cenital'> <img src='img/cenital.jpg' alt=''> <li onclick='mal()'>Plano Nadiro</li> <li onclick='mal()'>Plano Medio</li> <li onclick='correcto4()'>Plano Cenital</li> <li onclick='mal()'>Plano Máximo</li> </ul> <div id='calificacion4'></div>",
                "<ul id='enter'> <img src='img/enteroporsia.jpg' alt=''> <li onclick='mal()'>Plano Mayor</li> <li onclick='mal()'>Plano Centrado</li> <li onclick='mal()'>Plano Menor</li> <li onclick='correcto5()'>Plano Entero</li> </ul> <div id='calificacion5'></div>",
                "<ul id='medi'> <img src='img/medio.jpg' alt=''> <li onclick='correcto6()'>Plano Medio</li> <li onclick='mal()'>Plano Central</li> <li onclick='mal()'>Contrapicado</li> <li onclick='mal()'>Plano Menor</li>  </ul> <div id='calificacion6'></div>",
                "<ul id='nadi'> <img src='img/nadir.jpg' alt=''> <li onclick='mal()'>Plano Alto</li> <li onclick='mal()'>Plano Marco</li> <li onclick='correcto7()'>Plano Nadir</li> <li onclick='mal()'>Plano Vista</li> </ul> <div id='calificacion7'></div>",
                "<ul id='pano'> <img src='img/panoramico.jpg' alt=''> <li onclick='mal()'>Plano Fotográfico</li> <li onclick='mal()'>Nadir</li> <li onclick='mal()'>Contrapicado</li> <li onclick='correcto8()'>Panorámico</li> </ul> <div id='calificacion8'></div>",
                "<ul id='pica'> <img src='img/picado.jpg' alt=''> <li onclick='mal()'>Plano General</li> <li onclick='mal()'>Plano Medio</li> <li onclick='correcto9()'>Plano Picado</li> <li onclick='mal()'>Plano Medio</li> </ul> <div id='calificacion9'></div>",
                "<ul id='contra'> <img src='img/contrapicado.jpg' alt=''> <li onclick='correctofinal()'>Plano Contrapicado</li> <li onclick='mal()'>Plano Medio</li> <li onclick='mal()'>Plano Americano</li> <li onclick='mal()'>Plano Máximo</li> </ul> <div id='calificacionfinal'></div>"
            ]

            function numrandom(min, max) {
                return Math.floor(Math.random() * (max - min + 1) ) + min;
              }

           function random(){

             document.getElementById("contenido").innerHTML= preguntas[numrandom(0,preguntas.length-1)];
            }

            var fallo = 0;

            document.getElementById('puntuacioon').innerHTML=fallo;


         function correcto0(){
            document.getElementById('calificacion0').innerHTML="<p>Correcto! El plano general es así como grande!! Sï</p>";
            fallo++;
            document.getElementById('puntuacioon').innerHTML=fallo;
          }

           function correcto1(){
            document.getElementById('calificacion1').innerHTML="<p>Correcto! Este fue el plano primigenio, el primero de todos los planos</p>";
            fallo++;
            document.getElementById('puntuacioon').innerHTML=fallo;
          }

           function correcto2(){
            document.getElementById('calificacion2').innerHTML="<p>Correcto! El plano detalle ojito cuidao con el plano detalle.</p>";
            fallo++;
            document.getElementById('puntuacioon').innerHTML=fallo;
          }

           function correcto3(){
            document.getElementById('calificacion3').innerHTML="<p>Correcto! El plano americano es famoso por bombardear países en vías de desarrollo.</p>";
            fallo++;
            document.getElementById('puntuacioon').innerHTML=fallo;
          }

           function correcto4(){
            document.getElementById('calificacion4').innerHTML="<p>¡Correcto! A ver si puedes con todos...</p>";
            fallo++;
            document.getElementById('puntuacioon').innerHTML=fallo;
           }

           function correcto5(){
            document.getElementById('calificacion5').innerHTML="<p>¡Cooooooooorrecto!</p>";
            fallo++;
            document.getElementById('puntuacioon').innerHTML=fallo;
           }

           function correcto6(){
            document.getElementById('calificacion6').innerHTML="<p>¡Correcto! El plano medio es de los mas usados por todos.</p>";
            fallo++;
            document.getElementById('puntuacioon').innerHTML=fallo;
           }

           function correcto7(){
            document.getElementById('calificacion7').innerHTML="<p>¡Correcto! Sigamos a ver que pasa...</p>";
            fallo++;
            document.getElementById('puntuacioon').innerHTML=fallo;
           }

           function correcto8(){
            document.getElementById('calificacion8').innerHTML="<p>¡Correcto! Tambien es conocido como plano general largo :)</p>";
            fallo++;
            document.getElementById('puntuacioon').innerHTML=fallo;
           }

           function correcto9(){
            document.getElementById('calificacion9').innerHTML="<p>¡Cooorrecto! ¡No hay que confundir el picado con el cenital! </p>";
            fallo++;
            document.getElementById('puntuacioon').innerHTML=fallo;
           }

           function correctofinal(){
            document.getElementById('calificacionfinal').innerHTML="<p>¡Correcto! Pues como el picado pero al reves, ¿no?</p>";
            fallo++;
            document.getElementById('puntuacioon').innerHTML=fallo;
           }
           
           function mal(){
            alert("Prueba otra vez!");
            fallo--;
            document.getElementById('puntuacioon').innerHTML=fallo;
          }

     