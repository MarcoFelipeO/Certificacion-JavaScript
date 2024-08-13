 /* Escribe tu código aquí */
function mayorDeTres(a,b,c){
    if(a > b && a > c){
        return "El primer número es el mayor";
    }else if(b > a && b > c){
        return "El segundo número es el mayor";
    }else if(c > a && c > b){
        return "El tercer número es el mayor";
    }
    return "Los tres números son iguales";
}

console.log(mayorDeTres(3,4,6));