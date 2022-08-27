let textoBoton = document.getElementById("btnCambiar").innerText;
const clase = document.getElementById("galeria").innerText;


function cambiarvista() {
    if (galeria.className == "list") {
        galeria.className = "grid";
        textoBoton = document.getElementById("btnCambiar").innerText = "Modo lista";
    } else {
        galeria.className = "list";
        textoBoton = document.getElementById("btnCambiar").innerText = "Modo cuadricula";
    }
}


/* añadir grid y list (png) al if y al else en js y al html (btn) para eliminar texto (innerText)
innerHTML (reuerda meterlo antes en el HTML, a saber donde JA)*/