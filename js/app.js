function encriptarMensaje(resultado) {
    const encriptar = document.getElementById('texto1').value;
    const encriptado = encriptar.replace(/e/gi, 'enter').replace(/i/gi, 'imes').replace(/a/gi, 'ai').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');
    document.getElementById("texto2").value = encriptado
}


function desencriptarMensaje(resultado){
    const desencriptar= document.getElementById ("texto1").value;
    const desencriptado= desencriptar.replace(/ai/gi, 'a').replace(/enter/gi, 'e').replace(/imes/gi, 'i').replace(/ober/gi, 'o').replace(/ufat/gi, 'u');
    document.getElementById("texto2").value = desencriptado
}

function copiarMensaje(){
    var copyText = document.getElementById("texto2");
    copyText.select();
    document.execCommand("copy");
}

