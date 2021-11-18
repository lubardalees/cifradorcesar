window.addEventListener("load", inicio, true);

function inicio() {
    document.getElementById("mensaje").addEventListener("keyup", function () {
        this.value = this.value.toUpperCase();
    }, true);

    document.getElementById("cifrar").addEventListener("click", function () {
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje2").value = cifrar2(texto, desplazamiento);
    }, true);
    document.getElementById("descifrar").addEventListener("click", function () {
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje2").value = descifrar(texto, desplazamiento);
    }, true);
}

function cifrar(texto, desplazamiento) {
    if (!texto)
        return ''; // No se recomienda que haya más de un punto de salida de la función
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //Si aceptamos desplazamientos negativos, necesitamos hacerlo dos veces. Si no, sería:
    //desplazamiento = desplazamiento % 26;
    desplazamiento = (desplazamiento % 26 + 26) % 26;
    return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) + desplazamiento) % 26]);
}

function descifrar(texto, desplazamiento) {
    if (!texto)
        return ''; // No se recomienda que haya más de un punto de salida de la función
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //Si aceptamos desplazamientos negativos, necesitamos hacerlo dos veces. Si no, sería:
    //desplazamiento = desplazamiento % 26;
    desplazamiento = (desplazamiento % 26 - 26) % 26;
    return texto.replace(/[A-Z]/ig, c => letras[(letras.indexOf(c) - desplazamiento) % 26]);
}

function cifrar2(texto, desplazamiento) {
    let resultado = '';
    let letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //Si aceptamos desplazamientos negativos, necesitamos hacerlo dos veces. Si no, sería:
    //desplazamiento = desplazamiento % 26;
    desplazamiento = (desplazamiento % 26 + 26) % 26;

    if (texto) {
        for (let i = 0; i < texto.length; ++i) {
            //Si la letra está en el array de letras (es un símbolo, un espacio...)
            if (letras.indexOf(texto[i]) != -1) {
                //almacenamos en c la posición de la letra más el desplazamiento y le aplicamos el módulo
                let posicion = ((letras.indexOf(texto[i]) + desplazamiento) % 26);
                resultado += letras[posicion];
            } else
                resultado += texto[i]; // Números, espacios, símbolos... 
        }
    }
    return resultado;
}
