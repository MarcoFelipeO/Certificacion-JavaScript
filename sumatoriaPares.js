/* Escribe tu código aquí */

function sumatoriaPares(numero){

    suma = 0;
    for(contador = 1; contador <= numero; contador++){
        if(contador % 2 === 0){
            suma += contador; 
        }
    }
    return suma;
}


/* Fin */