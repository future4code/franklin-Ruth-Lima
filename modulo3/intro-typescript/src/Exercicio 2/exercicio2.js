
var cor1 = process.argv[2];
var cor2 = process.argv[3];
var cor3 = process.argv[4];

function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
    var arrayDeCores = [cor1, cor2, cor3];
    return arrayDeCores;
}
console.log(["As minhas 3 cores favoritas sao: ", imprimeTresCoresFavoritas(cor1, cor2, cor3)]);
