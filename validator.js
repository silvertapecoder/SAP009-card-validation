


const validator = {
 
  isValid(creditCardNumber){
    
    const arrayCard = creditCardNumber.split('').map(Number).reverse();
    let soma = 0;
    
    for (let i = 0; i < arrayCard.length; i++){
      
       
      if (i % 2 !== 0){
        const digit = arrayCard[i];
        const multiply = digit * 2;
  
        if (multiply >= 10){
          const sumDigits = multiply -9;
    
          soma += sumDigits;
        }

        else{
          soma += multiply;
        }
      }

      else{
        soma += arrayCard[i];
      } 
    }

    return soma % 10 === 0    
  },

  maskify(creditCardNumber) {
    const fourNumbers = creditCardNumber.slice(-4);
    const quantityOfNumbers = creditCardNumber.length -4;
    const mask = "#".repeat(quantityOfNumbers) + fourNumbers;

    return mask
   
  }
 

}

export default validator;
