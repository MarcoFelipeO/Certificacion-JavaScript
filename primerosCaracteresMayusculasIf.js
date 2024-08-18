/* Escribe tu código aquí */
function primerosCaracteresMayusculas(texto){
    if(texto.length <3 ){
        return "error";
    }
    const extraeTresCaracteres = texto.substring(0,3).toUpperCase();

    return extraeTresCaracteres; 
}
/* Fin */
console.log(primerosCaracteresMayusculas("Hola como te ha ido?"));