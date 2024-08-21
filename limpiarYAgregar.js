/* Escribe tu código aquí */

function limpiarYAgregar(arreglo,nombre){

	//limpiamos el nombre al principio y final con el método trim.
	//trim limpia tanto al inicio como al final.
	const limpiar = nombre.trim();	
	
	//Ahora usamos la const limpiar, en el método push(), para generar 
	//un nuevo nombre en el arreglo,
	 arreglo.push(limpiar);
	

	return arreglo;
	
}


/* Fin */