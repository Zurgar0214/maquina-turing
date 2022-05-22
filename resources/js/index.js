let cadena = "A0000B0000C0000T0000S00001001000110011010111101110111";
let posicion = 0; // Posición de la cinta
let cinta = cadena.split("");
let estadoActual = 'A'; // Valor que se toma en el estado actual

document.addEventListener('DOMContentLoaded', event => {

    if(posicion != -1){
        posicion = pasarbytes();
    }else{
        console.log("no hay inicio de instrucciones.")
    }
    
    // Cargar a la IG la cadena     
    console.log(cinta[posicion]);
})

/**
 * Verificar que en la máquina de turing se utiliza el alfabeto correcto
 * @param {string} cadena cadena a validar
 */
let validar = (cadena) => {
    let status;
    // IMPLEMENTAR
}

/**
 * Permite leer las instrucciones iniciales y determinar la función a ejecutar
 */
let leerInstrucciones = (posicion, cinta) => {
    while (estadoActual != -1 || posicion < cinta.length) {
        switch (estadoActual) {
            case value:

                break;

            default:
                break;
        }
    }
}


let pasarbytes = () => {

    for (let index = 0; index < cinta.length; index++) {
        const element = cinta[index];

        if (element === "S") {
            return index+1
        } 

    }
    return -1

};

