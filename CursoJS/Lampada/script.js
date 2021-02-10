const imagem = document.querySelector("#lampada")

const acender = document.querySelector("#acender");

function on() {
    imagem.style.backgroundImage = "url('lampada_acesa.jpg')"
}

function off() {
    imagem.style.backgroundImage = "url('lampada_apagada.jpg')"
}

