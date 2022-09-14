var num1 = Number(process.argv[3]);
var num2 = Number(process.argv[2]);

function comparaDoisNumeros(num1, num2) {

    var maiorNumero;
    var menorNumero;

    if (num1 > num2) {
        maiorNumero = num1;
        menorNumero = num2;
    }
    else {
        maiorNumero = num2;
        menorNumero = num1;
    }

    var diferenca = maiorNumero - menorNumero;
    return diferenca;
}

console.log('a diferenca entre eles e: ', comparaDoisNumeros(num1, num2));
