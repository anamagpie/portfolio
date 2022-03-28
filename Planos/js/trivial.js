var preguntas = ["<ul id='gene'> <img src='img/general.jpg' alt=''> <li onclick='correcto0()'>Plano General</li>  <li onclick='mal()'>Plano Medio</li>  <li onclick='mal()'>Primer Plano</li>  <li onclick='mal()'>Plano Catastrófico</li> </ul> <div id='calificacion0'></div>",
                "<ul id='prime'> <img src='img/primer plano.jpg' alt=''> <li onclick='mal()'>Plano Detalle</li> <li onclick='mal()'>Plano Criminal</li><li onclick='correcto1()'>Primer Plano</li> <li onclick='mal()'>Plano Indesructible</li> </ul> <div id='calificacion1'></div>",
                "<ul id='deta'> <img src='img/detalle.jpg' alt=''> <li onclick='mal()'>Plano Acercadito</li> <li onclick='correcto2()'>Plano Detalle</li> <li onclick='mal()'>Primer Plano</li> <li onclick='mal()'>Plano 4</li> </ul> <div id='calificacion2'></div>",
                "<ul id='amer'> <img src='img/americano.jpg' alt=''> <li onclick='mal()'>Plano Detalle</li> <li onclick='correcto3()'>Plano Americano</li> <li onclick='mal()'>Primer Plano</li> <li onclick='mal()'>Plano General</li> </ul> <div id='calificacion3'></div>",
                "<ul id='cenital'> <img src='img/cenital.jpg' alt=''> <li onclick='mal()'>Plano Nadiro</li> <li onclick='mal()'>Plano Medio</li> <li onclick='correcto4()'>Plano Cenital</li> <li onclick='mal()'>Plano Aberrante</li> </ul> <div id='calificacion4'></div>",
                "<ul id='enter'> <img src='img/enteroporsia.jpg' alt=''> <li onclick='mal()'>Plano Mierda</li> <li onclick='mal()'>Primer Cuarenta y 2</li> <li onclick='mal()'>Plano Planísimo</li> <li onclick='correcto5()'>Plano Entero</li> </ul> <div id='calificacion5'></div>",
                "<ul id='medi'> <img src='img/medio.jpg' alt=''> <li onclick='correcto6()'>Plano Medio</li> <li onclick='mal()'>Plano Central</li> <li onclick='mal()'>Plano Suficiente</li> <li onclick='mal()'>Plano Peleafísica</li>  </ul> <div id='calificacion6'></div>",
                "<ul id='nadi'> <img src='img/nadir.jpg' alt=''> <li onclick='mal()'>Plano Agresivo</li> <li onclick='mal()'>Plano Macron</li> <li onclick='correcto7()'>Plano Nadir</li> <li onclick='mal()'>Plano Universal</li> </ul> <div id='calificacion7'></div>",
                "<ul id='pano'> <img src='img/panoramico.jpg' alt=''> <li onclick='mal()'>Plano Fotográfico</li> <li onclick='mal()'>Plano Cercanías</li> <li onclick='mal()'>Plano Sé tu propio jefe</li> <li onclick='correcto8()'>Panorámico</li> </ul> <div id='calificacion8'></div>",
                "<ul id='pica'> <img src='img/picado.jpg' alt=''> <li onclick='mal()'>Plano Metafórico</li> <li onclick='mal()'>Plano Sideral</li> <li onclick='correcto9()'>Plano Picado</li> <li onclick='mal()'>Plano Iridiscente</li> </ul> <div id='calificacion9'></div>",
                "<ul id='contra'> <img src='img/contrapicado.jpg' alt=''> <li onclick='correctofinal()'>Plano Contrapicado</li> <li onclick='mal()'>Plano Respuesta Correcta</li> <li onclick='mal()'>Primer No te fíes de la anterior respuesta</li> <li onclick='mal()'>Plano Unete a nosotros</li> </ul> <div id='calificacionfinal'></div>"
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
            document.getElementById('calificacion4').innerHTML="<p> Correcto! El plano cenital está en el top!</p>";
            fallo++;
            document.getElementById('puntuacioon').innerHTML=fallo;
           }

           function correcto5(){
            document.getElementById('calificacion5').innerHTML="<p>Correcto! Niños, no os droguéis.</p>";
            fallo++;
            document.getElementById('puntuacioon').innerHTML=fallo;
           }

           function correcto6(){
            document.getElementById('calificacion6').innerHTML="<p>Correcto! El plano medio es</p>";
            fallo++;
            document.getElementById('puntuacioon').innerHTML=fallo;
           }

           function correcto7(){
            document.getElementById('calificacion7').innerHTML="<p>Correcto! Este plano no se usa porque seamos objetivos, pa qué se va a usar.</p>";
            fallo++;
            document.getElementById('puntuacioon').innerHTML=fallo;
           }

           function correcto8(){
            document.getElementById('calificacion8').innerHTML="<p>Correcto! Esto no es un plano, pero es más grande que el generañ.</p>";
            fallo++;
            document.getElementById('puntuacioon').innerHTML=fallo;
           }

           function correcto9(){
            document.getElementById('calificacion9').innerHTML="<p>Correcto! El plano picado está mosca</p>";
            fallo++;
            document.getElementById('puntuacioon').innerHTML=fallo;
           }

           function correctofinal(){
            document.getElementById('calificacionfinal').innerHTML="<p>Correcto! El plano contrapicado está así como lo ves.</p>";
            fallo++;
            document.getElementById('puntuacioon').innerHTML=fallo;
           }
           
           function mal(){
            alert("Prueba otra vez!");
            fallo--;
            document.getElementById('puntuacioon').innerHTML=fallo;
          }

          //AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA CONTADO