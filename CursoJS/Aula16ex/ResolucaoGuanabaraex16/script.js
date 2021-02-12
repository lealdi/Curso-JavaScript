let num = document.querySelector("#fnum")
let lista = document.querySelector("#flista")
let res = document.querySelector("#res")
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function Adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement("option")
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert("Valor invalido ou ja encontrado na lista")
    }
    num.value = ""; // zera o valor e retira o numero do campo para voce ja inserir um novo em seguida
    num.focus();
}

function finalizar() {
    if(valores.length == 0) {
        window.alert("Adicione valores antes de finalizar!")
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = "";
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados </p>`
        res.innerHTML += `<p>O Maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O Menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores , temos ${soma}</p>`
        res.innerHTML += `<p>A Media dos valores digitados e ${media}</p>`
    }
}