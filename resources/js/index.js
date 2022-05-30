let cadena = "A0000B0000C0000T0000S000011010000001001"; // 00 0110011010111101110111
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

    console.log(cinta);

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
    while (estadoActual != '-1' && posicion < cinta.length) {
        console.log("esta es la cinta posicio del primer caso---->",cinta[posicion-1])
        switch ( cinta[posicion]) {
            case '0':
                posicion++;
                
                switch (cinta[posicion]) {
                    case '0':
                        posicion++;
                        switch (cinta[posicion]) {
                            case '0':
                                posicion++;
                                estadoActual = cinta[posicion]

                                
                                console.log("Entro a identificar variable---->",posicion,estadoActual)
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
                        console.log("Identifico a C como variable")
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
        cases = ["0", "1", "S", "T", "C"]
        esc = ["0", "1", "S", "T"]
        aux = 'B'
        condEscape = 'C'
    } else {
        cases = ["0", "1", "S", "T"]
        esc = ["0", "1", "S"]
        aux = 'C'
        condEscape = 'T'
        console.log("Entro a C")
    }
    console.log("el cabezal se encuentra aqui", posicion, cinta[posicion])
    console.log(cases.includes(cinta[posicion-1]))


    

    for (let i = 0; i <= 3; i++) {        

        switch (cinta[posicion]) {
            case '0':
                console.log("Entro a cero")
                cinta[posicion] = 'X'
                console.log(cinta)
                console.log("la cinta se convirtio en --->", cinta[posicion])
                posicion--;
                console.log("Ahora estamos en la posicion----->", posicion)
                // Ciclo para ignorar a la izquierda y ubicarnos sobre la variable
                console.log("comprobando la condicion",cases.includes(cinta[posicion]))
                cases.includes(cinta[posicion])
                let bandera=true
                while ( bandera) {
                    console.log(cinta[posicion])                    
                    if(!cases.includes(cinta[posicion])){
                        bandera=false
                    }
                    posicion--;

                }
                posicion++
                console.log("Salio del while, esta en la posiicon",posicion,cinta[posicion])

                if (cinta[posicion] === aux) {
                    console.log("Entro condicion del auxiliar")
                    posicion++;
                    cinta[posicion] = '0'
                    posicion++;
                    
                }else{
                    cinta[posicion] = '0';
                    console.log("hizo el primer cambio",cinta);
                    posicion++;
                }
                
                
                if (cinta[posicion] != condEscape) {
                    
                    cinta[posicion] = 'X'
                    console.log("tenemos la condicion de escape distinta",cinta)
                    posicion++;
                    let bandera1=true
                    while (bandera1) {
                        console.log(cinta[posicion])                    
                        if(!cases.includes(cinta[posicion])){
                            bandera1=false
                        }
                        posicion++;
                    }
                    console.log("termino en la posicion para le segundo while",posicion)
                    cinta[posicion-1]='0';
                } else {
                    let bandera1=true
                    while (bandera1) {
                        console.log(cinta[posicion])                    
                        if(!cases.includes(cinta[posicion])){
                            bandera1=false
                        }
                        posicion++;
                    }
                    console.log("Este es el caracter ---->", cinta[posicion])
                    estadoActual = cinta[posicion]
                    console.log("Entro a la condicion de escape");
                    cinta[posicion-1]='0';                    
                }
                     
                
                break;

            case '1':

                console.log("Entro a cero")
                cinta[posicion] = 'Y'
                console.log(cinta)
                console.log("la cinta se convirtio en --->", cinta[posicion])
                posicion--;
                console.log("Ahora estamos en la posicion----->", posicion)
                // Ciclo para ignorar a la izquierda y ubicarnos sobre la variable
                console.log("comprobando la condicion",cases.includes(cinta[posicion]))
                cases.includes(cinta[posicion])
                let bandera3=true
                while ( bandera3) {
                    console.log(cinta[posicion])                    
                    if(!cases.includes(cinta[posicion])){
                        bandera3=false
                    }
                    posicion--;

                }
                posicion++
                console.log("Salio del while, esta en la posiicon",posicion,cinta[posicion])

                if (cinta[posicion] === aux) {
                    console.log("Entro condicion del auxiliar")
                    posicion++;
                    cinta[posicion] = '1'
                    posicion++;
                    
                }else{
                    cinta[posicion] = '1';
                    console.log("hizo el primer cambio",cinta);
                    posicion++;
                }
                
                
                if (cinta[posicion] != condEscape) {
                    
                    cinta[posicion] = 'Y'
                    console.log("tenemos la condicion de escape distinta",cinta)
                    posicion++;
                    let bandera1=true
                    while (bandera1) {
                        console.log(cinta[posicion])                    
                        if(!cases.includes(cinta[posicion])){
                            bandera1=false
                        }
                        posicion++;
                    }
                    console.log("termino en la posicion para le segundo while",posicion)
                    cinta[posicion-1]='1';
                } else {
                    let bandera1=true
                    while (bandera1) {
                        console.log(cinta[posicion])                    
                        if(!cases.includes(cinta[posicion])){
                            bandera1=false
                        }
                        posicion++;
                    }
                    console.log("Este es el caracter ---->", cinta[posicion])
                    estadoActual = cinta[posicion]
                    console.log("Entro a la condicion de escape");
                    cinta[posicion-1]='1';                    
                }
                    
                
                break;
            default:
                estadoActual = cinta[posicion]
                
                break;
        }
        
    }
     
    
}
