function abrirServicio(ruta){
    window.location.href = ruta;
}

function mostrarMensaje(texto, color = "white") {
    const mensaje = document.getElementById("mensajeAuth");
    mensaje.textContent = texto;
    mensaje.style.color = color;
}

function registrarCuenta() {
    const usuario = document.getElementById("registroUsuario").value.trim();
    const password = document.getElementById("registroPassword").value.trim();

    if (!usuario || !password) {
        mostrarMensaje("Completa todos los campos para registrarte.", "yellow");
        return;
    }

    const cuenta = {
        usuario: usuario,
        password: password
    };

    localStorage.setItem("cuentaGuardada", JSON.stringify(cuenta));
    mostrarMensaje("Cuenta registrada correctamente.", "lightgreen");

    document.getElementById("registroUsuario").value = "";
    document.getElementById("registroPassword").value = "";
}

function iniciarSesion() {
    const usuario = document.getElementById("loginUsuario").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const cuentaGuardada = JSON.parse(localStorage.getItem("cuentaGuardada"));

    if (!cuentaGuardada) {
        mostrarMensaje("No hay ninguna cuenta registrada.", "orange");
        return;
    }

    if (usuario === cuentaGuardada.usuario && password === cuentaGuardada.password) {
        localStorage.setItem("sesionActiva", usuario);
        actualizarVistaSesion();
        mostrarMensaje("Inicio de sesión correcto.", "lightgreen");
    } else {
        mostrarMensaje("Usuario o contraseña incorrectos.", "red");
    }
}

function cerrarSesion() {
    localStorage.removeItem("sesionActiva");
    actualizarVistaSesion();
    mostrarMensaje("Sesión cerrada.", "white");
}

function actualizarVistaSesion() {
    const sesionActiva = localStorage.getItem("sesionActiva");
    const authForms = document.getElementById("authForms");
    const usuarioActivo = document.getElementById("usuarioActivo");
    const nombreUsuarioActivo = document.getElementById("nombreUsuarioActivo");

    if (sesionActiva) {
        authForms.style.display = "none";
        usuarioActivo.style.display = "block";
        nombreUsuarioActivo.textContent = sesionActiva;
    } else {
        authForms.style.display = "block";
        usuarioActivo.style.display = "none";
        nombreUsuarioActivo.textContent = "";
    }
}

document.addEventListener("DOMContentLoaded", actualizarVistaSesion);