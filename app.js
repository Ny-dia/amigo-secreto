// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let nombresAmigos = [];

// Función para adicionar un nombre al array
function agregarAmigo() {
    // Obtener el valor del campo de entrada
    let nombre = document.getElementById("amigo").value.trim();

    // Validar si el campo está vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array de amigos
    nombresAmigos.push(nombre);

    // Limpiar el campo de entrada
    document.getElementById("amigo").value = "";

    // Actualizar la lista visible
    actualizarLista();

    // Habilitar el botón de sorteo si hay nombres en la lista
    if (nombresAmigos.length > 0) {
        document.querySelector(".button-draw").disabled = false;
    }
}

// Función para actualizar la lista visible en la página
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista actual

    // Crear un nuevo elemento para cada amigo y agregarlo a la lista
    nombresAmigos.forEach(function(nombre) {
        let item = document.createElement("li");
        item.textContent = nombre;
        lista.appendChild(item);
    });
}

// Función para realizar el sorteo del amigo secreto
function sortearAmigo() {
    if (nombresAmigos.length > 0) {
        // Seleccionar un nombre aleatorio del array
        let indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
        let amigoSecreto = nombresAmigos[indiceAleatorio];

        // Mostrar el resultado en pantalla
        mostrarResultado(amigoSecreto);

        // Opcional: Eliminar el nombre sorteado de la lista si quieres evitar que se repita
        nombresAmigos.splice(indiceAleatorio, 1);

        // Actualizar la lista y deshabilitar el botón de sorteo si la lista está vacía
        actualizarLista();

        if (nombresAmigos.length === 0) {
            document.querySelector(".button-draw").disabled = true;
        }
    } else {
        alert("No hay nombres en la lista para sortear.");
    }
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(amigoSecreto) {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultados anteriores

    let item = document.createElement("li");
    item.textContent = "El amigo secreto es: " + amigoSecreto;
    resultado.appendChild(item);
}

