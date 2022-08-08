function checaAnoBissexto(ano) {

    var cond1 = ano % 400 === 0;
    var cond2 = (ano % 4 === 0) && (ano % 100 !== 0);
    return cond1 || cond2;
}
var ano = Number(process.argv[2]);

if (checaAnoBissexto(ano)) {
    console.log('ano bissexto');
}
else {
    console.log('nao e ano bissexto');
}
