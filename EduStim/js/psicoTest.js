document.getElementById("consultar").addEventListener("click", function () {

    let puntos = {
        infantil: 0,
        psicope: 0,
        lenguaje: 0,
        neuro: 0
    };

    // Pregunta 1
    let p1 = document.querySelector('input[name="p1"]:checked');
    if (!p1) return alert("Responde la pregunta 1");
    puntos[p1.value]++;

    // Pregunta 2
    let p2 = document.querySelector('input[name="p2"]:checked');
    if (!p2) return alert("Responde la pregunta 2");
    puntos[p2.value]++;

    // Pregunta 3
    let p3 = document.querySelector('input[name="p3"]:checked');
    if (!p3) return alert("Responde la pregunta 3");
    puntos[p3.value]++;

    // Elegir la especialidad
    let final = Object.keys(puntos).reduce((a, b) => puntos[a] > puntos[b] ? a : b);

    let texto = "";

    if (final === "infantil") {
        texto = "Psicología Infantil: recomendada para dificultades emocionales, conducta o adaptación.";
    }
    if (final === "psicope") {
        texto = "Psicopedagogía: ideal para retos en aprendizaje y atención escolar.";
    }
    if (final === "lenguaje") {
        texto = "Terapia de Lenguaje: recomendada si hay dificultades en pronunciación o comunicación.";
    }
    if (final === "neuro") {
        texto = "Neuropsicología Infantil: ideal para problemas de memoria, atención o desarrollo.";
    }

    // Mostrar resultado
    document.getElementById("resultado-texto").innerText = texto;
    document.getElementById("resultado").style.display = "block";

    console.log("Respuesta p1:", p1.value);
    console.log("Respuesta p2:", p2.value);
    console.log("Respuesta p3:", p3.value);
    console.log("Puntos actuales:", puntos);
});


