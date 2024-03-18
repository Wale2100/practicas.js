const lista = document.getElementsByTagName("li");
for (let i = 0; i < lista.length; i +=1 ){
    lista[5].style.color = "green";
}

const MARCADO = document.getElementsByClassName("marcado");
for (let i = 0; i < MARCADO.length; i +=1 ){
    MARCADO[i].style.color = "red";
}
const PROGRAMACION = document.querySelectorAll("li,marcado");
for (let i = 0; i < PROGRAMACION.length; i +=1 ){
    PROGRAMACION[4].style.backgroundColor = "pink";
}