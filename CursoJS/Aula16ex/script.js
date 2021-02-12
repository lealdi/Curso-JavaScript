var numeros = [];

function adicionar() {
    var numero = document.querySelector("#numero").value;
    numeros.push(numero);
    let text_area = document.querySelector("#area-texto").innerHTML += `Adicionando número ${numero}\n`; 
}



function verificar() {    
    let paragrafo = document.createElement("p")  
    let texto_total = document.createTextNode("Temos " + numeros.length + " numeros cadastrados ate o momento ")   
    paragrafo.appendChild(texto_total)
    document.querySelector("#exibir").appendChild(paragrafo)  // Esse trecho de codigo mostra os numeros adicionados ate o momento

    let paragrafo_maior = document.createElement("p")    
    let maior = Math.max(...numeros)
    let texto_maior = document.createTextNode(`Maior numero ate o momento ${maior}`)
    paragrafo_maior.appendChild(texto_maior)
    document.querySelector("#exibir").appendChild(paragrafo_maior)
    //Trecho para mostrar maior numero dentro do array

    let paragrafo_menor = document.createElement("p")
    let menor = Math.min(...numeros)
    let texto_menor = document.createTextNode(`Menor numero ate o momento ${menor}`)
    paragrafo_menor.appendChild(texto_menor)
    document.querySelector("#exibir").appendChild(paragrafo_menor)
    //Trecho para mostrar menor numero dentro do array    

   
    let paragrafo_soma = document.createElement("p")
    let soma = function somar(total, num) {
        return total + Math.round(num);        
    }
    let texto_soma = document.createTextNode(`Soma dos numeros ${numeros.reduce(soma,0)}`)
    paragrafo_soma.appendChild(texto_soma)
    document.querySelector("#exibir").appendChild(paragrafo_soma)  
    // Exibe a soma de todos os elementos numericos dentro do array


}

