// Se o n1 ou n2 nao forem passados na hora da chamada no console.log , ele recebera o valor de 0 ou o que voce setar.

function soma(n1=0,n2=0) { 
    return n1 + n2
}

console.log(soma(3, 3))