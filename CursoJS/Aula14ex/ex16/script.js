

function clicou(){
    let mostrar = document.querySelector(".mostrar")
    let numero = document.getElementById("numero");
    let fim = document.getElementById("fimnum");
    let passo = document.querySelector("#passonum"); 
    
        let numero_convertido = Number(numero.value);
        let fim_convertido = Number(fim.value);
        let passo_convertido = Number(passo.value);

    if(numero == 0 || fim_convertido == 0){
        window.alert("Faltam Dados")
    }    
    
    else{

        if(passo_convertido <= 0){
            window.alert("Passo invalido ! Considerando passo 1");
            passo_convertido = 1;
        }
                
        if(numero_convertido < fim_convertido){
                    // Contagem crescente        
            for(let contador = numero_convertido;contador <= fim_convertido;contador += passo_convertido){
                mostrar.innerHTML += `${contador} \u{1F449}` //O ultimo trecho do codigo coloca emoji em unicode                
            }            
        }
        else{
            // Contagem Regressiva    
             for(let contador = numero_convertido;contador >= fim_convertido;contador -= passo_convertido){
                mostrar.innerHTML += `${contador} \u{1F449}`;
             }   
        }
        mostrar.innerHTML += `\u{1F3C1}` // Coloca emoji , codigo so funciona dentro de crases ``
    }
  }
