/* Escribe tu código aquí */
function obtenerDia(dia){
    if(dia === 1){
        return "Lunes";
    }else if(dia === 2){
        return "Martes";
    }else if(dia === 3){
        return "Miercoles";
    }else if(dia === 4){
        return "Jueves";
    }else if(dia === 5){
        return "Viernes"
    }else if(dia === 6){
        return "Sabado";
    }else if(dia === 0){
        return "Domingo";
    }else{
        return "Valor inválido";
    }
}
/* Fin */
console.log(obtenerDia(4));
