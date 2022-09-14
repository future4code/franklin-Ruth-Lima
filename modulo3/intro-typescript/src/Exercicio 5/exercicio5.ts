function checaRenovacaoRG() {
    const anoAtual = Number(process.argv[2])
    const anoNascimento = Number(process.argv[3])
    const anoEmissao = Number(process.argv[4])
 
    const idade = anoAtual - anoNascimento
    const tempoCarteira = anoAtual - anoEmissao

    const cond1: boolean = idade <= 20 && tempoCarteira >= 5
    const cond2: boolean = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3: boolean = idade > 50 && tempoCarteira >= 15
    
    if (cond1 || cond2 || cond3){
        return  console.log('renova')
    }else{
        return console.log('nao renova ')
    }
    
 }
 
 checaRenovacaoRG();