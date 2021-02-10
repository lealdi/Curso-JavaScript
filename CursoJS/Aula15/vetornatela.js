let valores = [8,1,7,4,2,9];
/* 
for(let pos = 0;pos < valores.length; pos++){  // Metodo tradicional de percorrer valores dentro de array
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) 
}

*/

for(let pos in valores){  // Para cada posicao(Variavel pos) in valores eu vou mostrar posicao. Metodo mais recente introduzido no ECMA Script mais recente.
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)    
}

