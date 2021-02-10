function tabuar(){
    let numero = document.querySelector("#num");    
    let mostrar = document.querySelector("#mostrar");      
    var numero_convertido = Number(numero.value);   
    var resultado = "";    
    var multiplica = 0;    
    
    while(multiplica < 10){
        multiplica++        
        resultado += numero_convertido + " x " + multiplica + " = " + numero_convertido * multiplica + "<br>";
        mostrar.innerHTML = resultado;        
    }
}