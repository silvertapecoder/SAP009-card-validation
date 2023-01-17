import validator from './validator.js';

console.log(validator);

var capturando = "";

function capturar() {
    capturando = document.getElementById('valor').value;
    document.getElementById('valorDigitado').innerHTML = capturando;
}