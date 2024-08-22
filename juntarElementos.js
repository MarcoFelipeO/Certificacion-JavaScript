/* Escribe tu código aquí */
function juntarElementos(arr1, valor, arr2) {
    // Concatenar arr1, el valor, y arr2
    const resultado = arr1.concat(valor, arr2);
    return resultado;
}
/* Fin */
console.log(juntarElementos([10, 20, 30], 40, [50, 60, 70]));
console.log(juntarElementos(["a", "b", "c"], 100, ["d", "e", "f"]));