function nombreVacio(){
    var nombre = document.getElementById("nombre");
    if (nombre.value === ""){
        return true;
    }else{
        return false;
    }
}

var vacio = nombreVacio();

if (vacio === true){
    alert("Debes completar el campo");
}