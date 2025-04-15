document.addEventListener("DOMContentLoaded", function () {
    const preguntaInput = document.getElementById("pregunta");
    const enviarPreguntaBtn = document.getElementById("enviarPregunta");
    const foroContainer = document.getElementById("foro-container");

    // Cargar preguntas y respuestas guardadas
    const preguntasRespuestas = JSON.parse(localStorage.getItem("foro")) || [];

    function renderizarForo() {
        foroContainer.innerHTML = "";
        preguntasRespuestas.forEach((item, index) => {
            const mensajeDiv = document.createElement("div");
            mensajeDiv.classList.add("mensaje");

            mensajeDiv.innerHTML = `
                <p><strong>Alumno:</strong> ${item.pregunta}</p>
                ${item.respuesta ? `<p><strong>Profesor:</strong> ${item.respuesta}</p>` : `<button class="responder-btn" data-index="${index}">Responder</button>`}
            `;
            foroContainer.appendChild(mensajeDiv);
        });

        // Asignar eventos a los botones de responder
        document.querySelectorAll(".responder-btn").forEach(button => {
            button.addEventListener("click", function () {
                const index = this.getAttribute("data-index");
                const respuesta = prompt("Escribe tu respuesta:");

                // Pedir contraseña si es el profesor
                const password = prompt("Introduce la contraseña para responder: ");
                if (password === "DIG-4ESO") {
                    if (respuesta) {
                        preguntasRespuestas[index].respuesta = respuesta;
                        localStorage.setItem("foro", JSON.stringify(preguntasRespuestas));
                        renderizarForo();
                    }
                } else {
                    alert("Contraseña incorrecta. Solo el profesor puede responder.");
                }
            });
        });
    }

    enviarPreguntaBtn.addEventListener("click", function () {
        const pregunta = preguntaInput.value.trim();
        if (pregunta) {
            preguntasRespuestas.push({ pregunta, respuesta: null });
            localStorage.setItem("foro", JSON.stringify(preguntasRespuestas));
            preguntaInput.value = "";
            renderizarForo();
        }
    });

    // Renderizar foro al cargar la página
    renderizarForo();
});


document.getElementById("subirCodigo").addEventListener("click", function() {
    // Obtener el contenido del textarea
    let codigo = document.getElementById("codigoAlumno").value;

    // Comprobar si hay código escrito
    if(codigo.trim() !== "") {
        // Guardar el código en localStorage
        localStorage.setItem("codigoAlumno", codigo);

        // Mostrar el mensaje de confirmación
        document.getElementById("mensajeConfirmacion").style.display = "block";

        // Limpiar el textarea después de enviar
        document.getElementById("codigoAlumno").value = "";
    } else {
        // Si el campo está vacío, mostrar alerta
        alert("Por favor, escribe tu código antes de enviarlo.");
    }
});

