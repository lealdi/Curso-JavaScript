var idade = 37;
if (idade < 16) {
    console.log("Nao vota");
} 

else if(idade > 60){
    console.log("Fica em casa porra");
}

else{
    if(idade >= 16 && idade < 18){
        console.log("Voto opcional")
    }
    else if(idade > 18){
        console.log("Pode votar");
    }
}