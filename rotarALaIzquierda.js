/* Escribe tu código aquí */
function rotarALaIzquierda(arreglo){

   const eliminaPrimero = arreglo.splice(0,1)[0];

    arreglo.push(eliminaPrimero);

    return arreglo;

}

console.log(rotarALaIzquierda([1,3,4,5,5,8,44]));
/* Fin */