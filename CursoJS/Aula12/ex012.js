var agora = new Date()
var horas = agora.getHours()  //Pega as horas em tempo real
var minutos = agora.getMinutes() //Pega os minutos em tempo real
var segundos = agora.getSeconds() //Pega os segundos em tempo real

console.log(`Agora sao exatamente ${horas} horas , ${minutos} minutos e ${segundos} segundos`);

if(horas < 12) {
    console.log("Bom dia!");
}

else if(horas <= 16){
    console.log("Boa tarde");
}

else if(horas >= 17 && horas <= 24){
    console.log("Boa noite!");
}

else{
    console.log("Boa Madrugada!");
}