var numeroAleatorio = Math.floor(Math.random() * 10) +1;

var adivina = prompt(" adivina un numero del 1 al 10");

var acertado = false;

if(parseInt(adivina) === numeroAleatorio){
    acertado = true;
}else if(parseInt(adivina) < numeroAleatorio){
    var adivinaBaja = prompt("Ultima oportunidad...");
    if(parseInt(adivinaBaja) === numeroAleatorio){
        acertado = true;
    }else{
        document.write("<p>por poco...");

    }
}else if(parseInt(adivina) > numeroAleatorio){
    document.write("<p>¡Te has pasado!");

}

if(acertado){
    document.write("<p>¿Cierto! Has Ganado!");
}else{
    document.write("<p>¿Nooo! Perdiste!");
}