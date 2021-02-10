let numeros = [5, 8, 2, 9, 3]

numeros.push(1);

console.log(numeros);
console.log(`O vetor tem ${numeros.length} posicoes`);
console.log(`O primeiro valor do vetor e ${numeros[0]}`);
let pos = numeros.indexOf(9); // o atributo indexOf busca onde foi parar o 8 dentro do array , e no caso ele se encontra no index 1.
console.log(`O valor  esta na posicao ${pos}`);