var alunno1 =[];
alunno1["Nombre"]= "Carlos";
alunno1["Curso"] = "Java";

var alunno2= {"Nombrer":"David", "Curso":"Angular"};

for(var key in alunno2){
    console.log(key + "-" + alunno2[key]);
}