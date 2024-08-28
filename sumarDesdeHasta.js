function sumarDesdeHasta(numero1, numero2) {
    let suma = 0;  // Inicializas la suma en 0

    // Bucle desde numero1 hasta numero2
    while (numero1 <= numero2) {
        suma += numero1;  // Agregas numero1 a suma
        numero1++;  // Incrementas numero1 para la siguiente iteración
    }

    return suma;  // Retornas la suma total
}

// Puedes probar la función con un console.log
console.log(sumarDesdeHasta(4, 9));  // Esto debería mostrar 39
