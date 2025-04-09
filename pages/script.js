// Función para completar la lección
function completeLesson(lessonId, nextButtonId, videoId) {
    const video = document.getElementById(videoId);
    
    // Verificamos si el video ha sido visto al 90%
    if (video.currentTime >= video.duration * 0.9) {
      // Deshabilitamos el botón de "Marcar como completada"
    document.getElementById(lessonId).querySelector('.btn:not([id^="nextLesson"])').disabled = true;
      // Habilitamos el botón "Pasar a la siguiente lección" y lo hacemos visible
    document.getElementById(nextButtonId).style.display = "inline-block";
    } else {
    alert("Por favor, completa el video antes de continuar.");
    }
}

  // Función para pasar a la siguiente lección
function nextLesson(currentLessonId, nextLessonId) {
    document.getElementById(currentLessonId).style.display = "none";
    document.getElementById(nextLessonId).style.display = "block";
}

  // Función para volver a la lección anterior y eliminar el requisito de espera
function goBack(currentLessonId, previousLessonId, previousNextButtonId) {
    // Al volver, forzamos la activación del botón "Pasar" de la lección anterior
    document.getElementById(previousNextButtonId).style.display = "inline-block"; // Hacemos visible el siguiente botón
    // Mostramos la lección anterior y ocultamos la actual
    document.getElementById(currentLessonId).style.display = "none";
    document.getElementById(previousLessonId).style.display = "block";
}

  // Función para manejar el envío de preguntas en el foro
function sendQuestion() {
    let pregunta = document.getElementById("pregunta").value.trim();
    if (pregunta !== "") {
    let foroContainer = document.getElementById("foro-container");
    let mensajeDiv = document.createElement("div");
    mensajeDiv.classList.add("mensaje");
    mensajeDiv.innerHTML = `<p><strong>Alumno:</strong> ${pregunta}</p>`;
    foroContainer.appendChild(mensajeDiv);
      document.getElementById("pregunta").value = ""; // Limpiar el textarea
    scrollToBottom(foroContainer);
    
      // Respuesta automática (simulación)
    setTimeout(() => {
        let respuestaDiv = document.createElement("div");
        respuestaDiv.classList.add("mensaje");
        respuestaDiv.innerHTML = `<p><strong>Profesor:</strong> Tu pregunta ha sido recibida. ¡Te responderé pronto!</p>`;
        foroContainer.appendChild(respuestaDiv);
        scrollToBottom(foroContainer);
    }, 1500);
    } else {
    alert("Por favor, escribe una pregunta.");
    }
}

  // Función para hacer scroll hasta el final del contenedor
function scrollToBottom(container) {
    container.scrollTop = container.scrollHeight;
}

  // Event Listeners para las lecciones y el foro
document.getElementById("completeLesson1").addEventListener("click", function() {
    completeLesson("lesson1", "nextLesson1", "video1");
});

document.getElementById("nextLesson1").addEventListener("click", function() {
    nextLesson("lesson1", "lesson2");
});

document.getElementById("completeLesson2").addEventListener("click", function() {
    completeLesson("lesson2", "nextLesson2", "video2");
});

document.getElementById("nextLesson2").addEventListener("click", function() {
    // Si existiera una lección 3, aquí se implementaría la transición.
    alert("Has completado todas las lecciones de este tema.");
});

  // Event listener para el botón "Volver" en la lección 2
document.getElementById("backLesson2").addEventListener("click", function() {
    // Al volver, se habilita el botón "Pasar" de la lección 1 inmediatamente
    goBack("lesson2", "lesson1", "nextLesson1");
});

  // Event listener para el foro
document.getElementById("enviarPregunta").addEventListener("click", function() {
    sendQuestion();
});

