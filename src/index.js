import validator from './validator.js';

console.log(validator);

let cardNumber = document.getElementById("numero");
let reversedCardNumber = cardNumber.reverse();
console.log('este é o numero invertido' + reversedCardNumber + '.')

function cardvalidation (event){
    event.preventDefault()

    const numeroDigitado = number.value
    const validado = validator.isValid(numeroDigitado)

    if(
        numeroDigitado === "" ||
        numeroDigitado === "0000000000000000" ||
        numeroDigitado === "000000000000000" ||
        numeroDigitado === "00000000000000" ||
        numeroDigitado.length <= 13){
            return (message.innerHTML = "Por favor, digite um número válido!")
        }

    else if(validado === true){
        return(message.innerHTML = "Velidado")
    }

    else if(validado === false){
        return(message.innerHTML = "Não validado")
    }
}

number.addEventListner("keyup", clone);
function clone (){
    const value = document.getElementById("numero").value

    const ocult= validator.maskify(value)
    
    const clone= document.getElementById("clone").value = ocult
}
