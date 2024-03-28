var alumno1 =[];
alumno1["Nombre"]= "Carlos";
alumno1["Curso"] = "Java";

var alumno2= {"Nombrer":"David", "Curso":"Angular"};

for(var key in alumno2){
    console.log(key + "-" + alumno2[key]);
}