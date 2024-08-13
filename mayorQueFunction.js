 /* Escribe tu código aquí */
function mayorQue(a,b){
    if(a > b){
        return "El primer número es mayor que el segundo.";
    }else if(b > a){
        return "El segundo número es mayor que el primero.";
    }else if(a === b){
        return "Ambos números son iguales.";
    }   
}

console.log(mayorQue(4,6));

/* Fin */