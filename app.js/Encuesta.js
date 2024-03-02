var correctas = 0;

var respuesta1 = prompt("Numbre de la mascota oficial de Linux");
if (respuesta1.toLowerCase() === "tux"){
    correctas +=1;
    console.log(correctas);
}

var respuesta2 = prompt("Lenguaje de programación con nombre de serpiente");
if (respuesta2.toLowerCase() === "python"){
    correctas +=1;
    console.log(correctas);
}

var respuesta3 = prompt("Lenguaje de programación con nombre de mineral");
if (respuesta3.toLowerCase() === "ruby"){
    correctas +=1;
    console.log(correctas);
}

var respuesta4 = prompt("Lenguaje que controla la estructura web");
if (respuesta4.toLowerCase() === "html"){
    correctas +=1;
    console.log(correctas);
}

var respuesta5 = prompt("Lenguaje que se usa para dar estilo a la web");
if (respuesta5.toLowerCase() === "css"){
    correctas +=1;
    console.log(correctas);
}

document.write("<p>Has acertado " + correctas + " de 5 preguntas.</p>");

//calculo de las notas
if (correctas === 5){
    document.write("<p><strong>Sobresaliente, puntuación mas alta</strong></p>");
}else if(correctas >= 3){
    document.write("<p><strong>No esta mal! Has obtenido un notable</strong></p>");
}else if(correctas >= 1){
    document.write("<p><strong>Necesitas mejorar un poco</strong></p>");
}else{
    document.write("<p><strong>Raspao</strong></p>");
}