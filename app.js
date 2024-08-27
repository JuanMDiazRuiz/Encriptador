let area = document.getElementById('respuestaTexto'); 
let parrafo = document.getElementById('parrafo'); 
let imagen = document.getElementById('imagen');
let botonCopiar = document.getElementById('botonCopiar');

area.style.display = 'none';
botonCopiar.style.display = 'none';

//funcion para encriptar el texto

function encriptarMensaje() {
    let texto = document.getElementById('contenedorTexto').value;
    let textoCifrado = texto
      .replace( /e/gi, 'enter')
      .replace( /o/gi, 'ober')
      .replace( /i/gi, 'imes')
      .replace( /a/gi, 'ai')
      .replace( /u/gi, 'ufat');

    if (texto.length != 0) {
        document.getElementById('respuestaTexto').value = textoCifrado;
        imagen.style.display = 'none';
        parrafo.style.display = 'none';
        area.style.display = 'block';
        botonCopiar.style.display = 'block';
        document.getElementById('contenedorTexto').value = '';       
    } else {
        alert('Debes ingresar algun texto');
    }
}

//funcion para desencriptar el texto

function desencriptarMensaje() {
    let texto = document.getElementById('contenedorTexto').value;
    let textoCifrado = texto
      .replace( /enter/gi, 'e')
      .replace( /ober/gi, 'o')
      .replace( /imes/gi, 'i')
      .replace( /ai/gi, 'a')
      .replace( /ufat/gi, 'u');
      
    if (texto.length != 0) {
        document.getElementById('respuestaTexto').value = textoCifrado;
        imagen.style.display = 'none';
        parrafo.style.display = 'none';
        area.style.display = 'block';
        botonCopiar.style.display = 'block'; 
        document.getElementById('contenedorTexto').value = '';      
    } else {
        alert('Debes ingresar algun texto');
    }
}

//funcion del boton de copiar texto

function copiar() {
    document.getElementById('respuestaTexto');
    
    navigator.clipboard.writeText(area.value).then(function() {
    });      
}

//funcion para ajuste automatico de textarea
function adjustHeight() {
    let texto = document.getElementById('contenedorTexto'); 
    texto.style.height = 'auto'; 
    texto.style.height = `${texto.scrollHeight}px`;
}

adjustHeight();
