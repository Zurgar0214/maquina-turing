let cadena = "A0000B0000C0000T0000S000100100"; // 0110011010111101110111
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

    console.log(cinta);
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
                                posicion++;
                                estadoActual = cinta[posicion]
                                identificarVariable();
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




let identificarVariable = () => {
    let bandera = true
    while (bandera && posicion < cinta.length) {
        switch (estadoActual) {
            case '0':
                posicion++
                switch (cinta[posicion]) {
                    case '0':
                        posicion++;

                        asignarValor("A");
                        bandera = false
                        break;
                    case '1':
                        posicion++;
                        asignarValor("B")
                        bandera = false

                        break;
                    default:
                        estadoActual == '-1'
                        bandera = false

                        break;
                }
                break;
            case '1':
                posicion++
                switch (cinta[posicion]) {
                    case '0':
                        posicion++;
                        asignarValor("C")
                        bandera = false

                        break;
                    default:
                        estadoActual == '-1'
                        bandera = false

                        break;
                }
                break;
            default:
                console.log("ALgo falla");
                bandera = false

                break;
        }
    }
}

let asignarValor = (variable) => {
    let cases // ignorar a la izquierda
    let esc // ignorar a la derecha
    let aux
    let condEscape
    if (variable === "A") {
        cases = ["0", "1", "S", "T", "C", "B"]
        esc = ["0", "1", "S", "T", "C"]
        aux = 'A'
        condEscape = 'B'
    } else if (variable === "B") {
        cases = ["0", "1", "S", "T", "C",]
        esc = ["0", "1", "S", "T"]
        aux = 'B'
        condEscape = 'C'
    } else {
        cases = ["0", "1", "S", "T",]
        esc = ["0", "1", "S"]
        aux = 'C'
        condEscape = 'T'
    }
    let bandera = true;
    while (bandera) {
        switch (estadoActual) {
            case '0':
                cinta[posicion] = 'X'
                estadoActual = posicion--;
                // Ciclo para ignorar a la izquierda y ubicarnos sobre la variable
                while (cases.includes(cinta[posicion]) && posicion >= 0) {
                    posicion--;
                }

                if (cinta[posicion] === aux) {
                    posicion++;
                }
                cinta[posicion] = '0'
                posicion++;
                if (cinta[posicion] != condEscape) {
                    cinta[posicion] = 'X'
                    while (cases.includes(cinta[posicion]) && posicion < cinta.length) {
                        posicion++;
                    }
                    cinta[posicion] = '0';
                    posicion++;
                } else {
                    while (esc.includes(cinta[posicion]) && posicion <= cinta.length) {
                        posicion++;
                    }
                    bandera = false
                }
                break;
            case '1':
                cinta[posicion] = 'Y'
                estadoActual = posicion--;
                // Ciclo para ignorar a la izquierda y ubicarnos sobre la variable
                while (cases.includes(cinta[posicion]) && posicion >= 0) {
                    posicion--;
                }

                if (cinta[posicion] === aux) {
                    posicion++;
                }
                cinta[posicion] = '1'
                posicion++;
                if (cinta[posicion] != condEscape) {
                    cinta[posicion] = 'Y'
                    while (cases.includes(cinta[posicion]) && posicion < cinta.length) {
                        posicion++;
                    }
                    cinta[posicion] = '1';
                    posicion++;
                } else {
                    while (esc.includes(cinta[posicion]) && posicion <= cinta.length) {
                        posicion++;
                    }
                    bandera = false
                }
                break;
            default:
                break;
        }
    }
}
