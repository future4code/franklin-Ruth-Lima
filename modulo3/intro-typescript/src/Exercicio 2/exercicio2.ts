

let cor1 = process.argv[2]
let cor2 = process.argv[3]
let cor3 = process.argv[4]

function imprimeTresCoresFavoritas(cor1: string, cor2: string, cor3: string): Array<string> {

const arrayDeCores =  [cor1, cor2,cor3]
    
return arrayDeCores 
}

 console.log(["As minhas 3 cores favoritas sao: ", imprimeTresCoresFavoritas(cor1, cor2, cor3 )])