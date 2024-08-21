/* Escribe tu código aquí */
function borrarYContarElementos(arreglo,cantidad){
    //elimina la posicion 0
    arreglo.splice(0,cantidad);
    //ahora retorna el arreglo y lo cuenta
    return arreglo.length;
}
/* Fin */