/* Escribe tu código aquí */
function juntarArreglos(arreglo1,arreglo2){
    //el primer arreglo se usa slice para que la cadena 
    // se devuelva desde el indice 1 en adelante y se almacena en 
    //eliminarPrimerArreglo 
    const eliminaPrimerArreglo = arreglo1.slice(1);
    //hace lo mismo que lo de arrriba
    const eliminarSegundoArreglo = arreglo2.slice(1);
    // aqui concatenamos ambos arreglos con concat y almacenamos en
    //arreglo3
    const arreglo3 = eliminaPrimerArreglo.concat(eliminarSegundoArreglo);
    return arreglo3;
}



/* Fin */
console.log(juntarArreglos([10, 20, 30, 40], [50, 60, 70, 80]))
console.log(juntarArreglos(["a", "b", "c"], ["d", "e", "f"]))