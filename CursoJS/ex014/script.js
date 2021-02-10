
function carregar(){
var mensagem = window.document.getElementById("mensagem");
var manha = window.document.getElementById("imagem");
var data = new Date(); // 
var hora = data.getHours();


mensagem.innerHTML = `Agora são ${hora} horas`;

if(hora >= 0 && hora < 12){
    // Bom dia!
    document.getElementById("imagem").src = "./images/morning.jpg"; // Pega o ID imagem e coloca a foto de sua escolha para mostrar 
    document.body.style.backgroundColor = "#d9c9b0";
}
else if(hora >= 12 && hora < 18){
// Boa Tarde!
    document.getElementById("imagem").src = "./images/afternoon.jpg"; // Pega o ID imagem e coloca a foto de sua escolha para mostrar 
   document.body.style.backgroundColor = "#295a78";
   }

else{
// Boa Noite!
    document.getElementById("imagem").src = "./images/night.jpg";
    document.body.style.backgroundColor = "#121315";
}

}