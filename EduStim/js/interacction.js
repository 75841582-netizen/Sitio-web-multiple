const params = new URLSearchParams(window.location.search);
const destino = params.get("destino"); // psico o estim

function login() {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const dni = document.getElementById("dni").value.trim();
    const edad = document.getElementById("edad").value.trim();

    if (!nombre || !apellido || !dni || !edad) {
        alert("Por favor completa todos los campos.");
        return;
    }

    if (dni.length !== 8 || isNaN(dni)) {
        alert("Ingresa un DNI válido de 8 dígitos.");
        return;
    }

    if (isNaN(edad) || edad < 1 || edad > 120) {
        alert("Ingresa una edad válida.");
        return;
    }

    const datos = { nombre, apellido, dni, edad };
    localStorage.setItem("datosTutor", JSON.stringify(datos));

    if (destino === "psico") {
        window.location.href = "psicologia.html";
    } else if (destino === "estim") {
        window.location.href = "Estimulacion.html";
    } else {
        alert("No se encontró destino. Volviendo al inicio.");
        window.location.href = "EduStim.html";
    }
};

/*Psicologia*/
window.addEventListener("DOMContentLoaded", () => {
    const datos = JSON.parse(localStorage.getItem("datosTutor"));
    if (datos) {
        document.getElementById("titulo").innerText =
            "Bienvenido, " + datos.nombre + " " + datos.apellido;
    }
});


/*Estimulacion*/
window.addEventListener("DOMContentLoaded", () => {
    const datos = JSON.parse(localStorage.getItem("datosTutor"));
    if (datos) {
        document.getElementById("titulo").innerText =
            "Bienvenido, " + datos.nombre + " " + datos.apellido;
    }
});


