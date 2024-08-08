/* Escribe tu código aquí */
function revisarAntesDeSalir(llaves,celular){
    if(llaves === true && celular === true){
        return "Todo listo, puedes salir de casa";
    }
    if(llaves === true && celular === false){
        return "Te falta el celular";
    }
    if(llaves === false && celular === true){
        return "Te falta las llaves";
    }
}

console.log(revisarAntesDeSalir(true, false));
/* Fin */