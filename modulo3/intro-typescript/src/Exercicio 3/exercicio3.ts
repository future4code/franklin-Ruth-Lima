function checaAnoBissexto(ano: number) {
    const cond1: boolean = ano % 400 === 0
    const cond2: boolean = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
 }
 const ano: number = Number(process.argv[2])

if(checaAnoBissexto(ano)){
    console.log('ano bissexto')
}else{
    console.log('nao e ano bissexto')
}

 