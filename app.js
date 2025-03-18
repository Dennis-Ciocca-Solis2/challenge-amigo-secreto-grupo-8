let misAmiguis = [];

function agregarAmigui() {
    let entrada = document.getElementById('amigo');
    let nuevoAmigui = entrada.value.trim();
    if (nuevoAmigui === "") {
        alert("Por favor, escribe un nombre.");
    } else {
        misAmiguis.push(nuevoAmigui);
        entrada.value = "";
        actualizarListaLoca();
    }
}

function actualizarListaLoca() {
    let listaloca = document.getElementById('listaAmigos');
    while (listaloca.firstChild) {
        listaloca.removeChild(listaloca.firstChild);
    }

    for (let i = 0; i < misAmiguis.length; i++) {
        let elementoLista = document.createElement('li');
        elementoLista.textContent = misAmiguis[i];
        listaloca.appendChild(elementoLista);
    }
}

function sortearAmigui() {
    let mensaje = document.getElementById('resultado');
    if (misAmiguis.length === 0) {
        alert("No hay nombres para sortear.");
    } else {
        let indiceAleatorio = Math.random() * misAmiguis.length;
        let indiceRedondeado = Math.floor(indiceAleatorio);
        let ganador = misAmiguis[indiceRedondeado];
        mensaje.innerHTML = `El amigo secreto es: ${ganador}`;
    }
}
