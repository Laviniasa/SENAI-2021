var nota = 0;

//cria variavel i pra ser contador; condiçao: enqunto i for < do que vamos comparar funciona; incrementa
/*for(let i = 0; i < notas.length; i++) {
    nota = nota + notas[i]; //nota = 0 + notas[0] = 10
}*/

/*notas.forEach(item => {
    nota += item; // nota = nota + item;
})

var media = nota / notas.length;

console.log(media)*/

var notas = [];
var nota = 0;

while (nota > -1){
    nota = Number(prompt('Informe uma nota: '));
    if(nota > -1) notas.push(nota);
}

console.log(notas);