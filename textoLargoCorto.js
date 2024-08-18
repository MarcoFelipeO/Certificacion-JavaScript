/* Escribe tu código aquí */
function textoLargoCorto(texto){
    const textoTotal = texto.length;
    if(textoTotal >10){
        return "Mucho texto";
    }
    return "Poco texto";
}

console.log(textoLargoCorto("COMO ESTAS AMIGO COMO TE HA IDO ESTE DOMINGO?"));

/* Fin */