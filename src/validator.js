
//inverter números

const validator = {
 
  isValid(creditCardNumber){
    /*const arrayCard =  [];
    for (let i = 0; i < creditCardNumber.legth; i++){
      const digit = parseInt(creditCardNumber[i]);
      arrayCard.push(digit);
    }

    const fromBackToFront = arrayCard.reverse();

    for (let i = 0; i < fromBackToFront)
  }*/

  let arrayCard = creditCardNumber.split('');
  
  let cardNumberReversed = arrayCard.reverse();

  function multiplyEvenNumbers (){
  
    let evenNumbers = [];
    
    for (let i = 0; i < creditCardNumber.legth; i++){
      const digit = creditCardNumber[i];
      if (digit % 2 === 0){
        evenNumbers.push(digit);
      }

      if else (i => 10){
        const sumDigits = i -9;
        evenNumbers.push(sumDigits);
      }
    }    
  }
 
  function SumOfDigits(){
    let numbersSummedUp = 0;
    for(let i= 0; i<evenNumbers.length; i++){
      numbersSummedUp = numbersSummedUp + evenNumbers[i];
    
      let oddNumbers = []
    
    }

  numbersSummedUp.push(evenNumbers);



  }
}
};

  







 
 
 


  //split numbers typed on valor
  //separar números das posições pares (1,3,5,7,9,11,13,15)
  //multiplicar por 2
  //somar dígitos dos números a partir de 10 (if alguma coisa)
  //somar todos os dígitos

export default validator;
