let cadena = "A1100B0110C0110T0000S00000101000010111110001"; // 00 0110011010111101110111
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
                                let variable;
                                
                                console.log("Entro a identificar variable---->",posicion,estadoActual)
                                variable=identificarVariable();
                                asignarValor(variable);
                                break;
                            case '1':
                                console.log("Ejecutar Asignar Variable\n");
                                // Identificamos las variables a utilizar
                                posicion++;
                                estadoActual = cinta[posicion];
                                let variable1=identificarVariable();
                                estadoActual = cinta[posicion]
                                let variable2=identificarVariable();
                                pos=posicion;
                                posicion--;
                                asignarVariable(variable1, variable2);
                                posicion=pos;
                                break;
                                

                            default:
                                estadoActual == '-1';
                                break;
                        }
                        break;
                    case '1':
                        posicion++;
                        switch (cinta[posicion]) {
                            case '0':

                                posicion++;
                                estadoActual = cinta[posicion]
                                
                                let variable,lugar;
                                
                                console.log("Entro a Desplazar---->",posicion,estadoActual)
                                variable=identificarVariable();
                                console.log("Esta es la posicion de la direccion",posicion)
                                direccion=cinta[posicion]
                                lugar=posicion
                                console.log("Esta es la  direccion",cinta[posicion])
                                
                                console.log("es la cadena marcada", cinta)
                                
                                estadoActual = cinta[posicion-1]
                                desplazar(variable,direccion);
                                
                                console.log("Ejecutar Desplazar\n");
                                posicion++;
                                posicion=lugar
                                console.log("esta es la posicion donde termina",posicion)
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
                                estadoActual = cinta[posicion]
                                console.log("hasta el mmento esta en la posicion", posicion)
                                variable=identificarVariable();
                                pos=posicion
                                compADos(variable)
                                
                                posicion=pos;
                                
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
                estadoActual = '-1';
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

                        //asignarValor("A");                        
                        bandera = false
                        return "A"
                        break;
                    case '1':
                        posicion++;
                        //asignarValor("B")
                        bandera = false
                        return "B"
                        break;
                    default:
                        estadoActual == '-1'
                        bandera = false
                        return "No se identifico variable"
                        break;
                }
                break;
            case '1':
                posicion++
                switch (cinta[posicion]) {
                    case '0':
                        posicion++;
                        console.log("Identifico a C como variable")
                        //asignarValor("C")                        
                        bandera = false
                        return "C"

                        break;
                    default:
                        estadoActual == '-1'
                        bandera = false
                        return "No se identifico variable"
                        break;
                }
                break;
            default:
                console.log("ALgo falla");
                bandera = false
                return "No se identifico variable"
                break;
        }
    }
};

let asignarValor = (variable) => {

    let cases // ignorar a la izquierda
    let esc // ignorar a la derecha
    let ejecutar=true;
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

    while(ejecutar){
            

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
                    ejecutar=false;                 
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
                    ejecutar=false;                  
                }
                    
                
                break;
            default:
                estadoActual = cinta[posicion]
                
                break;
        }
        
        
    }

    
    
};

let sumar = () =>{};

let desplazar = (variable, lado) =>{

    let cases, salida // ignorar a la izquierda
    let bandera=true // ++
        
    if (variable === "A" & lado == "0") {
        cases = "A"  
        salida= "B"      
    } else if (variable === "A" & lado == "1") {
        cases = "B"
        salida = "A"
    } else if(variable === "B" & lado == "0"){
        cases = "B"
        salida = "C"
    } else if (variable === "B" & lado == "1"){
        cases = "C"
        salida = "B"
    } else if (variable === "C" & lado == "0") {
        cases = "C"
        salida = "T"
    }else {
        cases = "T"
        salida = "C"
    }
    console.log("el cabezal se encuentra aqui", posicion, cinta[posicion])
    

    //++ llegar hasta la variable en la cual se desea hacer el desplasamiento. 
  

    switch (lado) {
        //desplazar Izquierda
        case "0":
            while ( bandera) {
                           
                if(cases === cinta[posicion]){
                    bandera=false;
                    posicion++;
                }else{
                    posicion--;
                }   
        
            }
            console.log("despues del while se encuentra en la posicion: ",posicion);
            console.log("este es el lado",lado)
            console.log("Entro a la primera condicion de direccion")
            let ejecucion=true;
            while (ejecucion) {

                console.log("Esta en el for")
                console.log("la posicion es: ",cinta[posicion])
                switch (cinta[posicion]) {
        
                    case '1':
        
                        console.log("Entro a primer Uno ademas estamos en la posicion: ",posicion)
                        cinta[posicion] = 'X'
                        console.log(cinta)
                        console.log("la cinta se convirtio en --->", cinta)
                        posicion++;
        
                        
                        console.log("Ahora estamos en la posicion----->", posicion)
                        
                        switch(cinta[posicion]){
                            case '0':
        
                                console.log("Entro a cero")
                                posicion--;
                                cinta[posicion] = '0'
                                console.log(cinta)
                                console.log("la cinta se convirtio en --->", cinta[posicion])
                                posicion++;
                                console.log("Ahora estamos en la posicion----->", posicion)
        
                                break;
        
        
                            case '1':
        
                                console.log("Entro a uno")
                                posicion--;
                                cinta[posicion] = '1'
                                console.log(cinta)
                                console.log("la cinta se convirtio en --->", cinta[posicion])
                                posicion++;
                                console.log("Ahora estamos en la posicion----->", posicion)
        
                                break;

                            case salida:
                                console.log("Entro a B")
                                posicion--;
                                cinta[posicion] = '0';
                                posicion++;
                                console.log("termina en la posicion: ",posicion)
                                console.log("y la cinta en esa posicion es: ", cinta[posicion])
                                ejecucion=false;

                                break;
                        }                     
                        
                        break;
        
                    case '0':
        
                        console.log("Entro a primer Uno ademas estamos en la posicion: ",posicion)
                        cinta[posicion] = 'X'
                        console.log(cinta)
                        console.log("la cinta se convirtio en --->", cinta)
                        posicion++;
        
                        
                        console.log("Ahora estamos en la posicion----->", posicion)
                        
                        switch(cinta[posicion]){
                            case '0':
        
                                console.log("Entro a cero")
                                posicion--;
                                cinta[posicion] = '0'
                                console.log(cinta)
                                console.log("la cinta se convirtio en --->", cinta[posicion])
                                posicion++;
                                console.log("Ahora estamos en la posicion----->", posicion)
        
                                break;        
        
                            case '1':
        
                                console.log("Entro a uno")
                                posicion--;
                                cinta[posicion] = '1'
                                console.log(cinta)
                                console.log("la cinta se convirtio en --->", cinta[posicion])
                                posicion++;
                                console.log("Ahora estamos en la posicion----->", posicion)
        
                                break;

                            case salida:
                                console.log("Entro a B")
                                posicion--;
                                cinta[posicion] = '0';
                                posicion++;
                                console.log("termina en la posicion: ",posicion)
                                console.log("y la cinta en esa posicion es: ", cinta[posicion])
                                ejecucion=false;

                                break;
                        }                       
                                
                        break;
                    default:
                        estadoActual = cinta[posicion]                
                        break;
                }
                
            }
           
            break;
        // Desplazar Derecha
        case "1":
            while ( bandera) {
                           
                if(cases === cinta[posicion]){
                    bandera=false;
                    posicion--;
                }else{
                    posicion--;
                }   
        
            }
            console.log("despues del while se encuentra en la posicion: ",posicion);
            console.log("este es el lado",lado)
            console.log("Entro a la segunda condicion de direccion")
            let ejecucion_uno=true;
            
            while (ejecucion_uno) { 

                console.log("Esta en el for",index)
                console.log("la posicion es: ",cinta[posicion])
                switch (cinta[posicion]) {
        
                    case '1':
        
                        console.log("Entro a primer Uno ademas estamos en la posicion: ",posicion)
                        cinta[posicion] = 'X'
                        console.log(cinta)
                        console.log("la cinta se convirtio en --->", cinta)
                        posicion--;
        
                        
                        console.log("Ahora estamos en la posicion----->", posicion)
                        
                        switch(cinta[posicion]){
                            case '0':        
                                console.log("Entro a cero para evaluar segundo numero")
                                posicion++;
                                cinta[posicion] = '0'
                                console.log(cinta)
                                console.log("la cinta se convirtio en --->", cinta[posicion])
                                posicion--;
                                console.log("Ahora estamos en la posicion----->", posicion)        
                                break;
        
        
                            case '1':        
                                console.log("Entro a uno para evaluar segundo numero")
                                posicion++;
                                cinta[posicion] = '1'
                                console.log(cinta)
                                console.log("la cinta se convirtio en --->", cinta[posicion])
                                posicion--;
                                console.log("Ahora estamos en la posicion----->", posicion)        
                                break;

                            case salida:
                                console.log("Entro a A para evaluar segundo numero")
                                posicion++;
                                cinta[posicion] = '0'
                                console.log(cinta)
                                console.log("la cinta se convirtio en --->", cinta[posicion])
                                posicion--;
                                console.log("Ahora estamos en la posicion----->", posicion)        
                                break;
                                
                        }                     
                        
                        break;
        
                    case '0':
        
                        console.log("Entro a primer Uno ademas estamos en la posicion: ",posicion)
                        cinta[posicion] = 'X'
                        console.log(cinta)
                        console.log("la cinta se convirtio en --->", cinta)
                        posicion--;
        
                        
                        console.log("Ahora estamos en la posicion----->", posicion)
                        
                        switch(cinta[posicion]){
                            case '0':
        
                                console.log("Entro a cero para evaluar segundo numero")
                                posicion++;
                                cinta[posicion] = '0'
                                console.log(cinta)
                                console.log("la cinta se convirtio en --->", cinta[posicion])
                                posicion--;
                                console.log("Ahora estamos en la posicion----->", posicion)
        
                                break;        
        
                            case '1':
        
                                console.log("Entro a uno para evaluar segundo numero")
                                posicion++;
                                cinta[posicion] = '1'
                                console.log(cinta)
                                console.log("la cinta se convirtio en --->", cinta[posicion])
                                posicion--;
                                console.log("Ahora estamos en la posicion----->", posicion)        
                                break;

                            case salida:
                                console.log("Entro a A para evaluar segundo numero")
                                posicion++;
                                cinta[posicion] = '0'
                                console.log(cinta)
                                console.log("la cinta se convirtio en --->", cinta[posicion])
                                posicion--;
                                console.log("Ahora estamos en la posicion----->", posicion) 
                                ejecucion_uno=false       
                                break;
                        }                
                                
                        break;
                    default:
                        estadoActual = cinta[posicion]                
                        break;
                }   

            }           
            break;        
    
        default:
            break;
    }
    
    //posicion=posicion.length;
     
};

let compADos = (variable) =>{

    let cases // ignorar a la izquierda    
    let condEscape, bandera=true;
    let banderaUno = true;
    let banderaDos = true;
    let banderaTres = true;

    if (variable === "A") {
        cases = "B"             
        condEscape = 'A'

    } else if (variable === "B") {
        cases = "C"        
        condEscape = 'B'
    } else {
        cases = "T"       
        condEscape = 'C'        
    }
    

    while ( bandera) {
                            
        if(cases === cinta[posicion]){
            bandera=false;
            posicion--;
        }else{
            posicion--;
        }   
    }
    
    console.log("Salio del primer while con posicion: ",posicion)

    while (banderaUno){        

        if(cinta[posicion]==="0"){
            cinta[posicion]="1";
            posicion-- ;
        }else if(cinta[posicion]===condEscape){
            banderaUno=false;
            posicion++ ;
        }else if(cinta[posicion]==="1"){
            cinta[posicion]="0";
            posicion-- ;
        }
    }

    console.log("Salio del segundo while con posicion: ",posicion,cinta)

    while (banderaDos){
        
        if(cases === cinta[posicion]){
            banderaDos=false;
            posicion--;
        }else{
            posicion++ ;
        }       
        
    }

    console.log("Salio del tercer while con posicion: ",posicion,cinta)


    while (banderaTres){

        if(cinta[posicion]===condEscape ){
            banderaTres=false;
            posicion++;
        }else if(cinta[posicion]==="0"){
            cinta[posicion]="1"
            banderaTres=false;
            posicion++; 
        }
        else{
            cinta[posicion]="0"
            posicion--;
        }

    };
    console.log("el cabezal se encuentra aqui", posicion, cinta[posicion])
    console.log(cases.includes(cinta[posicion-1]))    


};

let asignarVariable = (variable1, variable2) => {
    let cases // ignorar a la izquierda
    let esc // ignorar a la derecha
    let aux
    let condEscape
    let bandera = true;
    // Obtenemos las condiciones para la variable2
    if (variable1 < variable2) {

        let extra = ['X', 'Y', variable1] // Adicionales para ignorar a la derecha
        let extraL = ['1', '0', 'Z', variable2] // Adicionales para ignorar a la izquierda
        if (variable2 === "A") {
            cases = ["0", "1", "S", "T", "C", "B"]
            esc = ["0", "1", "S", "T", "C"]
            aux = 'A'
            condEscape = 'B'
        } else if (variable2 === "B") {
            cases = ["0", "1", "S", "T", "C"]
            esc = ["0", "1", "S", "T"]
            aux = 'B'
            condEscape = 'C'
        } else {
            cases = ["0", "1", "S", "T"]
            esc = ["0", "1", "S"]
            aux = 'C'
            condEscape = 'T'
        }

        while ((posicion >= 1) && (cinta[posicion] != variable2) && (posicion < cinta.length)) {
            posicion--
        }
        posicion++ // Nos encontramos en variable2, nos movemos a la derecha
        estadoActual = cadena[posicion] // identificada la segunda variable
        while (bandera) {
            cinta[posicion] === condEscape ? bandera = false : cinta[posicion] = 'Z'
            posicion++
        }
        bandera = true;
        while (bandera) {
            while ((posicion >= 1) && (!extra.includes(cinta[posicion])) && (posicion < cinta.length)) {
                posicion--
            }
            if (cinta[posicion] === variable1) {
                posicion++
            } else if (cinta[posicion] === 'X') {
                cinta[posicion] = '0'
                posicion++
            } else if (cinta[posicion] === 'Y') {
                cinta[posicion] = '1'
                posicion++
            }
            estadoActual = cadena[posicion]
            // Analizamos los casos
            switch (estadoActual) {
                case '1':
                    cinta[posicion] = 'Y'
                    posicion++
                    while ((posicion >= 1) && (cinta[posicion] != variable2) && (posicion < cinta.length)) {
                        posicion++
                    }
                    posicion++ // Nos encontramos en B, nos movemos a la derecha
                    while ((posicion >= 1) && (cinta[posicion] != 'Z') && (posicion <= cinta.length)) {
                        posicion++
                    }
                    if (cinta[posicion] === 'Z') {
                        cinta[posicion] = '1';
                    } else {
                        bandera = false
                    }
                    posicion--
                    break;
                case '0':
                    cinta[posicion] = 'X'
                    posicion++
                    while ((posicion >= 1) && (cinta[posicion] != variable2) && (posicion < cinta.length)) {
                        posicion++
                    }
                    posicion++ // Nos encontramos en B, nos movemos a la derecha
                    while ((posicion >= 1) && (cinta[posicion] != 'Z') && (posicion <= cinta.length)) {
                        posicion++
                    }
                    if (cinta[posicion] === 'Z') {
                        cinta[posicion] = '0';
                    } else {
                        bandera = false
                    }
                    posicion--
                    break;
                case variable2:
                    bandera = false;
                    break;
                default:
                    console.log('No se reconoce el caracter en la posición')
                    bandera = false
                    break;
            }
        }
    } else {

        let extraL = ['1', '0', 'Z', variable2] // Adicionales para ignorar a la izquierda
        if (variable1 === "A") {
            cases = ["0", "1", "S", "T", "C", "B"]
            esc = ["0", "1", "S", "T", "C"]
            aux = 'A'
            condEscape = 'B'
        } else if (variable1 === "B") {
            cases = ["0", "1", "S", "T", "C"]
            esc = ["0", "1", "S", "T"]
            aux = 'B'
            condEscape = 'C'
        } else {
            cases = ["0", "1", "S", "T"]
            esc = ["0", "1", "S"]
            aux = 'C'
            condEscape = 'T'
        }
        let extra = ['X', 'Y', condEscape] // Adicionales para ignorar a la derecha
        while ((posicion >= 1) && (cinta[posicion] != variable2) && (posicion < cinta.length)) {
            posicion--
        }
        posicion++ // Nos encontramos en variable2, nos movemos a la derecha
        estadoActual = cadena[posicion] // identificada la segunda variable
        while (bandera) {
            cinta[posicion] === aux ? bandera = false : cinta[posicion] = 'Z'
            posicion++
        }
        bandera = true;
        while (bandera) {
            while ((posicion >= 1) && (!extra.includes(cinta[posicion])) && (posicion < cinta.length)) {
                posicion++
            }
            if (cinta[posicion] === 'C') {
                posicion--
            }
            if (cinta[posicion] === variable1) {
            } else if (cinta[posicion] === 'X') {
                cinta[posicion] = '0'
                posicion--
            } else if (cinta[posicion] === 'Y') {
                cinta[posicion] = '1'
                posicion--
            }
            estadoActual = cadena[posicion]
            // Analizamos los casos
            switch (estadoActual) {
                case '1':
                    cinta[posicion] = 'Y'
                    posicion--
                    while ((posicion >= 1) && (cinta[posicion] != 'Z') && (posicion <= cinta.length)) {
                        posicion--
                    }
                    if (cinta[posicion] === 'Z') {
                        cinta[posicion] = '1';
                    } else {
                        bandera = false
                    }
                    posicion++
                    break;
                case '0':
                    cinta[posicion] = 'X'
                    posicion--
                    while ((posicion >= 1) && (cinta[posicion] != 'Z') && (posicion <= cinta.length)) {
                        posicion--
                    }
                    if (cinta[posicion] === 'Z') {
                        cinta[posicion] = '0';
                    } else {
                        bandera = false
                    }
                    posicion++
                    break;
                case condEscape:
                    bandera = false;
                    break;
                default:
                    console.log('No se reconoce el carácter en la posición')
                    bandera = false
                    break;
            }
        }
    }
};
