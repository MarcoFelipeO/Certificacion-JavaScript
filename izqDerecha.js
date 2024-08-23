/* Escribe tu código aquí */
function izqDerecha(arreglo,num){
    if(num < 100){
        //al final del arreglo se agrega con push()
        arreglo.push(num);

    }else{
        arreglo.unshift(num);
    }
    return arreglo;
}



/* Fin */