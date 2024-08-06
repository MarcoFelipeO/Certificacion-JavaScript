/* Escribe tu código aquí */
function revisarAntesDeSalir(llaves,celular){
    if(llaves === "Si" && celular === "Si"){
        return "Todo listo, puedes salir de casa"
    }else if(llaves === "Si" && celular === "No"){
        return "Te falta el celular"
    }else if(llaves === "No" && celular === "Si"){
        return "Te falta las llaves"
    }else if(llaves === "No" && celular === "No"){
        return "Falta todo"
    }
}
/* Fin */
console.log(revisarAntesDeSalir("Si","No"));