function adivinaNumero(numero){
    if(numero === 7){
        return "Adivinaste el número secreto";
    }else if(numero === 6){
        return "Casi, pero no es el número secreto";
    }else if(numero === 8){
        return "Estas equivocado, el número secreto no es 8";
    }else{
        return "No es el numero correcto";
    }
}

console.log(adivinaNumero(12));