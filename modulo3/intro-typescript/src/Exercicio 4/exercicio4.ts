const num1:number = Number(process.argv[3]);
const num2: number = Number(process.argv[2]);

function comparaDoisNumeros(num1: number, num2: number) {
    let maiorNumero; 
    let menorNumero;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca: number = maiorNumero - menorNumero;
  
    return diferenca
  }

  console.log('a diferenca entre eles e: ', comparaDoisNumeros(num1, num2))