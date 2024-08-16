/* Escribe tu código aquí */
function primerosCaracteresMayusculas(texto){
    
    const comoComienza = texto.substring(0,5);
    const comienzaYMayus = comoComienza.toUpperCase();
    
        return comienzaYMayus;
}
/* Fin */

console.log(primerosCaracteresMayusculas("HOLA COMO TE HA IDO ESTE TIEMPO?"));