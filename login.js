async function iniciarSesion() {
    const correo = document.getElementById("correoLogin").value.trim();
    const password = document.getElementById("passwordLogin").value.trim();
    const mensaje = document.getElementById("mensajeLogin");

    mensaje.textContent = "";

    if (!correo || !password) {
        mensaje.textContent = "Completa todos los campos.";
        mensaje.style.color = "red";
        return;
    }

    try {
        const respuesta = await fetch("https://sem03.onrender.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                correo: correo,
                password: password
            })
        });

        const data = await respuesta.json();

        if (!respuesta.ok) {
            mensaje.textContent = data.error || "No se pudo iniciar sesión.";
            mensaje.style.color = "red";
            return;
        }

        mensaje.textContent = data.mensaje;
        mensaje.style.color = "green";

        localStorage.setItem("usuarioActivo", JSON.stringify(data.usuario));

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);

    } catch (error) {
        console.error(error);
        mensaje.textContent = "Error al conectar con el servidor.";
        mensaje.style.color = "red";
    }
}