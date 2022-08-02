//para acessar os parametros passados na linha de comando usamos:

//exercicio 1

const informacaoPessoal = () => {

const nome = process.argv[2];
const idade = process.argv[3];

const idadeMais7 = Number(idade) + Number("7");

    if(nome !== undefined){
        console.log("Ola", nome, "!", "Voce tem", idade, "anos", "Em sete anos você terá", idadeMais7);
    }else{
        console.log("verifique se todos os requisitos foram passados")
    }   
}


console.log(informacaoPessoal());
