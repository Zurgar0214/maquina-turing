let cadena = "A0000B0000C0000T0000S0000"; // 1001000110011010111101110111
let posicion = 0; // Posición de la cinta
let cinta = cadena.split("");
let estadoActual = 'A'; // Valor que se toma en el estado actual

document.addEventListener('DOMContentLoaded', event => {

    if (posicion != -1) {
        posicion = pasarbytes();
        estadoActual = cinta[posicion];
    } else {
        console.log("no hay inicio de instrucciones.")
    }

    // Cargar a la IG la cadena     
    leerInstrucciones();
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
let leerInstrucciones = () => {
    while (estadoActual != '-1' || posicion < cinta.length) {
        switch (estadoActual) {
            case '0':
                posicion++;
                switch (cinta[posicion]) {
                    case '0':
                        posicion++;
                        switch (cinta[posicion]) {
                            case '0':
                                console.log("Ejecutar Asignar Valor\n");
                                posicion++;
                                break;
                            case '1':
                                console.log("Ejecutar Asignar Variable\n");
                                posicion++;
                            default:
                                estadoActual == '-1';
                                break;
                        }
                        break;
                    case '1':
                        posicion++;
                        switch (cinta[posicion]) {
                            case '0':
                                console.log("Ejecutar Desplazar\n");
                                posicion++;
                                break;
                            case '1':
                                console.log("Ejecutar Sumar\n");
                                posicion++;
                            default:
                                estadoActual == '-1';
                                break;
                        }
                        break;
                    default:
                        estadoActual = '-1';
                        break;
                }
                break;
            case '1':
                posicion++;
                switch (cinta[posicion]) {
                    case '0':
                        posicion++;
                        switch (cinta[posicion]) {
                            case '0':
                                console.log("Ejecutar Complemento A2\n");
                                posicion++;
                                break;
                            case '1':
                                console.log("Ejecutar Inicio Repetir\n");
                                posicion++;
                            default:
                                estadoActual == '-1';
                                break;
                        }
                        break;
                    case '1':
                        posicion++;
                        switch (cinta[posicion]) {
                            case '0':
                                console.log("Ejecutar Fin Repetir\n");
                                posicion++;
                                break;
                            case '1':
                                console.log("Fin Programa\n");
                                posicion++;
                            default:
                                estadoActual == '-1';
                                break;
                        }
                        break;
                    default:
                        estadoActual = '-1';
                        break;
                }
                break;
            default:
                console.log("ALgo falla");
                break;
        }
    }
}


let pasarbytes = () => {

    for (let index = 0; index < cinta.length; index++) {
        const element = cinta[index];

        if (element === "S") {
            return index + 1
        }

    }
    return -1

};

