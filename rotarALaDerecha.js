/* Escribe tu código aquí */
function rotarALaDerecha(arreglo){
    //el ultimo indice del arreglo
    const ultimoElemento = arreglo.pop();

    //agrega el indice al inicio del arreglo
    arreglo.unshift(ultimoElemento);

    return arreglo;
}


/* Fin */
console.log(rotarALaDerecha([5, 6, 7, 8, 9]));
console.log(rotarALaDerecha(['a', 'b', 'c', 'd', 'e'])); 