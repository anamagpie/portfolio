let textoBoton = document.getElementById("btnCambiar").innerText;
const clase = document.getElementById("galeria").innerText;


function cambiarvista() {
    if (galeria.className == "list") {
        galeria.className = "grid";
        textoBoton = document.getElementById("btnCambiar").innerText = "Modo lista";
    } else {
        galeria.className = "list";
        textoBoton = document.getElementById("btnCambiar").innerText = "Modo cuadradicos";
    }
}