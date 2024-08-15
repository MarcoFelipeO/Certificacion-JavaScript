/* Escribe tu código aquí */
function transformar(texto1,texto2){
    const textoMayus = texto1.toUpperCase();
    const textoMin = texto2.toLowerCase();
    const concatenar = textoMayus+textoMin;
    return concatenar;
}
/* Fin */
console.log(transformar("hola ","QUE TAL"));
