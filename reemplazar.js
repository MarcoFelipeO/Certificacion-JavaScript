/* Escribe tu código aquí */
function reemplazar(arreglo, numero1, numero2){
    
    //accedo al indice 0 del arreglo y le asigno el parametro numero1;
    arreglo[0] = numero1;

    //accedo a el ultimo indice del arreglo y le asigno el parametro numero2;
    arreglo[arreglo.length -1] = numero2;

    return arreglo;

}



/* Fin */