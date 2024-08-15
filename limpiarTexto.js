/* Escribe tu código aquí */
function limpiarTexto(texto1, texto2){
    const sinEspacios1 = texto1.trim();
    const sinEspacios2 = texto2.trim();
    const concatenar = sinEspacios1+sinEspacios2;
    return concatenar;
}
console.log(limpiarTexto("         Que es lo que esta pasando aqui ?   ","  Hola Saludosss   "));


/* Fin */