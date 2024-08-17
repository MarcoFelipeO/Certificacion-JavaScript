/* Escribe tu código aquí */
function obtenerTLD(url) {
    // Usamos slice(-4) para obtener los últimos 4 caracteres de la URL
    return url.slice(-9);
}

console.log(obtenerTLD("https://es.wikipedia.org/wiki/.org"));

/* Fin */