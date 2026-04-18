document.getElementById("formulario").addEventListener("submit", async function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const password = document.getElementById("password").value.trim();
    const edad = document.getElementById("edad").value;
    const genero = document.getElementById("genero").value;

    const intereses = [...document.querySelectorAll(".checkbox-group input:checked")]
        .map(i => i.value);

    const mensaje = document.getElementById("mensaje").value.trim();

    const error = document.getElementById("error");
    const success = document.getElementById("success");

    error.textContent = "";
    success.textContent = "";

    if (!nombre || !correo || !password || !edad || !genero) {
        error.textContent = "Todos los campos obligatorios deben completarse";
        return;
    }

    if (password.length < 6) {
        error.textContent = "La contraseña debe tener al menos 6 caracteres";
        return;
    }

    if (edad < 18) {
        error.textContent = "Debes ser mayor de edad";
        return;
    }

    try {
        const res = await fetch("https://sem03.onrender.com/registro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre,
                correo,
                password,
                edad: Number(edad),
                genero,
                intereses,
                mensaje
            })
        });

        const data = await res.json();

        if (!res.ok) {
            error.textContent = data.error || "No se pudo registrar el usuario";
            return;
        }

        success.textContent = data.mensaje || "Usuario registrado correctamente 🎉";
        document.getElementById("formulario").reset();

    } catch (err) {
        error.textContent = "Error al conectar con el servidor";
        console.error(err);
    }
});