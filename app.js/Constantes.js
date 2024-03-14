const MYINPUT =document.getElementById("nombre");
const MIBOTON =document.getElementById("boton");

MIBOTON.addEventListener("click", ()=>{
    for(i=0;i<2;i++){
    console.log("Hola " + MYINPUT.value)
}});

for (i=0;i<4;i++){
    console.log("interactuando en js " + i)
};