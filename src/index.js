/* eslint-disable no-console */
import validator from './validator.js';

console.log(validator);

const creditCardNumber = document.getElementById("number");
const button = document.getElementById("btn");
const message = document.getElementById("mensagem");

function cardvalidation (e){
  e.preventDefault();
  const numberInput = creditCardNumber.value;
  console.log(numberInput);

  const validador = validator.isValid(numberInput);
  console.log(validador);
      
   
  if(numberInput.length < 10){
    return (message.innerHTML = ` Número ${validator.maskify(numberInput)} incompleto! `)
  }

  else if (validador) {
            
    return(message.innerHTML = ` Cartão ${validator.maskify(numberInput)} Válido `)
  }
  else {
    return(message.innerHTML = ` Cartão ${validator.maskify(numberInput)} Inválido `)
  } 



    
}

button.addEventListener('click', cardvalidation); 