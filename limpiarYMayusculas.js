/* Escribe tu código aquí */
function limpiarYMayusculas(texto,texto2){
    const textoListo1 = (texto.trim().toUpperCase());
    const textoListo2 = (texto2.trim().toUpperCase());

    const concatenar = textoListo1+textoListo2;
    return concatenar;
}

console.log(limpiarYMayusculas("      Es un gusto conocerte,   ","   Para mi tambien, muchas gracias           "));

/* Fin */