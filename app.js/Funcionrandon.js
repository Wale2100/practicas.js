function azar(min, max) {
    if ( isNaN(min) & isNaN(max)){
        throw new Error("Ambos números han de ser números");
    } 
    var randomNumero = Math.floor(Math.random() * (max - min)) + min;
    return randomNumero;
  } 

  document.write(azar(1,5));
  document.write(azar(1,5));
  document.write(azar(wilson,5));
  document.write(azar(1,5));

