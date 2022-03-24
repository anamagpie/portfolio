let ojos = [
    'Ojo0.png',
    'Ojo1.png',
    'Ojo2.png',
    'Ojo3.png',
    'Ojo4.png',
    'Ojo5.png',
    'Ojo6.png',
    'Ojo7.png'
 
]

let bocas = [
    'Boca0.png',
    'Boca1.png',
    'Boca2.png',
    'Boca3.png',
    'Boca4.png',
    'Boca5.png',
    'Boca6.png',
    'Boca7.png'
    
]

let cabezas = [
    'Cab0.png',
    'Cab1.png',
    'Cab2.png'
     
]

let narices = [
    'Nariz0.png',
    'Nariz1.png',
    'Nariz2.png',
    'Nariz3.png',
    'Nariz4.png',
    'Nariz5.png',
    'Nariz6.png',
    'Nariz7.png'
]

let pelos = [
    'peluco0.png',
    'peluco1.png',
    'peluco2.png',
    'peluco3.png',
    'peluco4.png',
    'peluco5.png',
    'peluco6.png',
    'peluco7.png'
]

let n_ojos = 0;
let n_narices = 0;
let n_bocas = 0;
let n_peluco = 0;
let n_cabezas = 0;



function ojo() {
    if (n_ojos < ojos.length - 1) {
        n_ojos++;
    } else {
        n_ojos = 0;
    }
    document.getElementById('ojos').style.backgroundImage = "url('img/" + ojos[n_ojos] + "')";
}

function nariz() {
    if (n_narices < narices.length - 1) {
        n_narices++;
    } else {
        n_narices = 0;
    }
    document.getElementById('nariz').style.backgroundImage = "url('img/" + narices[n_narices] + "')";
}

function boca() {
    if (n_bocas < bocas.length - 1) {
        n_bocas++;
    } else {
        n_bocas = 0;
    }
    document.getElementById('boca').style.backgroundImage = "url('img/" + bocas[n_bocas] + "')";

}

function pelo() {
    if (n_peluco < pelos.length - 1) {
        n_peluco++;
    } else {
        n_peluco = 0;
    }
    document.getElementById('peluco').style.backgroundImage = "url('img/" + pelos[n_peluco] + "')";

}

function cabeza() {
    if (n_cabezas < cabezas.length - 1) {
        n_cabezas++;
    } else {
        n_cabezas = 0;
    }
    document.getElementById('cabeza').style.backgroundImage = "url('img/" + cabezas[n_cabezas] + "')";
    console.log("img/" + cabezas[0]);
}

function aleatorio() {
    document.getElementById('ojos').style.backgroundImage = "url('img/" + ojos[random(0, ojos.length - 1)] + "')";
    document.getElementById('boca').style.backgroundImage = "url('img/" + bocas[random(0, bocas.length - 1)] + "')";
    document.getElementById('cabeza').style.backgroundImage = "url('img/" + cabezas[random(0, cabezas.length - 1)] + "')";
    document.getElementById('nariz').style.backgroundImage = "url('img/" + narices[random(0, narices.length - 1)] + "')";
    document.getElementById('peluco').style.backgroundImage = "url('img/" + pelos[random(0, pelos.length - 1)] + "')";
}

function hue() {
    let mitono = document.getElementById('tono').value;
    document.getElementById('cabeza').style.filter = "hue-rotate(" + mitono+ "deg)";
}


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


aleatorio();