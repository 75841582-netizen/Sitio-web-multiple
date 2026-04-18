function abrirServicio(ruta){
    window.location.href = ruta;
}
document.addEventListener("DOMContentLoaded", () => {
    const usuarioGuardado = JSON.parse(localStorage.getItem("usuarioActivo"));
    const bienvenida = document.getElementById("bienvenidaUsuario");

    if (usuarioGuardado && bienvenida) {
        bienvenida.textContent = `Bienvenido, ${usuarioGuardado.nombre}`;
    }
});