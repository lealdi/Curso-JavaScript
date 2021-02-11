var numeros = [];

function adicionar() {
    var numero = document.querySelector("#numero").value;
    numeros.push(numero);
    let text_area = document.querySelector("#area-texto").innerHTML += `Adicionando número ${numero}\n`; 
}



function verificar() {    
    var maior = Math.max(...numeros)

    var paragrafo = document.createElement("p")  // Criando paragrafo dinamico
    var texto_total = document.createTextNode("Temos " + numeros.length + " numeros cadastrados ate o momento ")   
    

    paragrafo.appendChild(texto_total)
    document.querySelector("#exibir").appendChild(paragrafo)
}

