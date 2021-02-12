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
    var maior = Math.max(...numeros)
    let texto_maior = document.createTextNode(`Maior numero ate o momento ${maior}`)
    paragrafo_maior.appendChild(texto_maior)
    document.querySelector("#exibir").appendChild(paragrafo_maior)

}

