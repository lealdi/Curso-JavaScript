function clicou() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById("txtano");
    var resultado = document.getElementById("resultado");

    if (fano.value.length == 0 || fano.value > ano) {  // Ele está pegando o valor da variavel fano e depois pegando o tamanho e comparando com zero e verificando se nao é maior que o ano atual
        window.alert("Erro , Verifique novamente os dados");
    }
    else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value)
        resultado.innerHTML = `Idade e ${idade}`;
        var genero = "";
        var img = document.createElement("img");
        
        img.style.margin = ("0","40px");
        img.style.width = ("400px");
        img.style.height = ("350px");
        img.setAttribute("id","foto");
        
        if(fsex[0].checked) {
            genero = "Homem";
            if(idade >= 0 && idade <10){
                // Crianca           
                img.setAttribute("src","./images/child-men.jpg");     
            }
            else if(idade < 21){
                //Jovem
                img.setAttribute("src","./images/young-men.jpg");
            }
            else if(idade < 50){
                //Adulto
                img.setAttribute("src","./images/adult-men.jpg");
            }
            else{
                //Idoso
                img.setAttribute("src","./images/old-men.jpg");
            }
        }
        else{
            genero = "Mulher";
            if(idade >= 0 && idade <10){
                //Crianca
                img.setAttribute("src","./images/child-woman.jpeg"); 
            }
            else if(idade < 21){
                //Jovem
                img.setAttribute("src","./images/young-woman.jpg");
            }
            else if(idade < 50){
                //Adulto
                img.setAttribute("src","./images/adult-woman.jpg");
            }
            else{
                //Idoso
                img.setAttribute("src","./images/old-woman.jpg");
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        resultado.appendChild(img); //Adiciona um elemento abaixo do elemento de cima
    }
}