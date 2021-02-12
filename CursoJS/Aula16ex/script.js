var numeros = [];

function adicionar() {
    var numero = document.querySelector("#numero").value;
    numeros.push(numero);
    if(numero < 0 || numero > 101) {
        window.alert("Digite algum numero entre 0 e 100")
        location.reload(); // Faz um refresh na pagina
    }
    else{
    let text_area = document.querySelector("#area-texto").innerHTML += `Adicionando número ${numero}\n`; 
    }
}


function verificar() {    
    
    if(numeros.length === 0){
        window.alert("Adicione algum numero antes de finalizar")
    }

    else{

    let paragrafo = document.createElement("p")  
    let texto_total = document.createTextNode("Temos " + numeros.length + " numeros cadastrados ate o momento ")   
    paragrafo.appendChild(texto_total)
    document.querySelector("#exibir").appendChild(paragrafo)  // Esse trecho de codigo mostra os numeros adicionados ate o momento

    let paragrafo_maior = document.createElement("p")    
    let maior = Math.max(...numeros)
    let texto_maior = document.createTextNode(`Maior numero até o momento ${maior}`)
    paragrafo_maior.appendChild(texto_maior)
    document.querySelector("#exibir").appendChild(paragrafo_maior)
    //Trecho para mostrar maior numero dentro do array

    let paragrafo_menor = document.createElement("p")
    let menor = Math.min(...numeros)
    let texto_menor = document.createTextNode(`Menor numero até o momento ${menor}`)
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

    elementos = numeros.length
    total = numeros.reduce(soma,0)
    media = total / elementos
    // Calculo das Medias

    let paragrafo_media = document.createElement("p")
    let texto_media = document.createTextNode(`A media dos elementos é ${media}`)
    paragrafo_media.appendChild(texto_media)
    document.querySelector("#exibir").appendChild(paragrafo_media)
    //Exibir a media na tela

    }
}

function limpar() {
    document.querySelector("#exibir").remove();
    document.querySelector("#area-texto").remove();
    location.reload(); // Faz um refresh na pagina
}
