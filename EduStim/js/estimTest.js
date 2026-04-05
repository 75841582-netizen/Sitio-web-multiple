document.getElementById("consultar").addEventListener("click", function () {

    // guardado de datos
    let edad = document.getElementById("edadNino").value;
    let area = document.getElementById("area").value;

    // validación
    if (edad === "" || area === "") {
        alert("Por favor selecciona la edad y el área de interés.");
        return;
    }

    let texto = "";

    if (edad === "0-2" && area === "motricidad") {
        texto = "En esta etapa es ideal trabajar control de cabeza, rodadas y gateo con juegos suaves.";
    }
    if (edad === "0-2" && area === "lenguaje") {
        texto = "Repite sonidos, canta y utiliza juguetes sonoros para estimular el balbuceo.";
    }
    if (edad === "0-2" && area === "cognitivo") {
        texto = "Juegos de causa y efecto, reconocimiento de objetos y exploración sensorial.";
    }
    if (edad === "0-2" && area === "socioemocional") {
        texto = "Contacto visual, sonrisas, caricias y juegos de imitación.";
    }

    if (edad === "2-4" && area === "motricidad") {
        texto = "Salto, caminar en línea, lanzar pelotas y juegos que desarrollen equilibrio.";
    }
    if (edad === "2-4" && area === "lenguaje") {
        texto = "Cuentos simples, identificar colores y objetos, ampliar vocabulario.";
    }
    if (edad === "2-4" && area === "cognitivo") {
        texto = "Clasificación de formas, rompecabezas simples y juegos de memoria.";
    }
    if (edad === "2-4" && area === "socioemocional") {
        texto = "Juegos de turnos, identificar emociones y actividades grupales.";
    }

    if (edad === "4-6" && area === "motricidad") {
        texto = "Correr, saltar, circuitos simples y coordinación mano-ojo.";
    }
    if (edad === "4-6" && area === "lenguaje") {
        texto = "Historias más largas, describir imágenes y juegos de preguntas.";
    }
    if (edad === "4-6" && area === "cognitivo") {
        texto = "Rompecabezas de más piezas, secuencias, patrones y juegos de lógica.";
    }
    if (edad === "4-6" && area === "socioemocional") {
        texto = "Trabajo en equipo, resolver conflictos simples y expresar emociones.";
    }

    document.getElementById("textoResultado").innerText = texto;
    document.getElementById("resultado").style.display = "block";

    let numero = "51987654321";

    document.getElementById("whatsapp").href =
        "https://wa.me/" + numero +
        "?text=Hola, quiero una orientación en el área de " + area +
        " para un niño de " + edad + " años.";

});
