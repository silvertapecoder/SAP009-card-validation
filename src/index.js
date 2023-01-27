//import validator from './validator.js';

//console.log(validator);

let creditCardNumber = document.getElementById("number")
//let numberArray = cardNumber.split("");
//let reversedCardNumber = numberArray.reverse();
let button = document.getElementById("btn")
let message = document.getElementById("mensagem")

button.addEventListener('click', cardvalidation)



function cardvalidation (event){
    event.preventDefault()
    const numberInput = creditCardNumber.value

   // const validado = validator.isValid(numeroDigitado)

    
   
   if(numberInput.length <= 13){
            return (message.innerHTML = "Número incompleto!")
        }

   

    
}

    