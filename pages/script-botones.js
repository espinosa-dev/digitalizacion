// Código erróneo para comprobar
const correctCode = `<!DOCTYPE html>
<html>
<head>
    <title>Mi Página</title>
</head>
<body>
    <h1>Hola Mundo</h1>
</body>
</html>`;

// Llamadas a los elementos
const codeArea = document.getElementById("codeArea");BigInt64Array
const checkBtn = document.getElementById("checkBtn");
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popupMessage");
const correctCodeArea = document.getElementById("correctCode");

let isSubmitted = false; // Para evitar enviar más de una vez

checkBtn.addEventListener("click", () => {
    if (isSubmitted) return; // Si ya se ha enviado, no hacer nada
        const userCode = codeArea.value.trim();
    if (userCode === correctCode) {
        // Si el código es correcto
        popupMessage.textContent = "¡Has acertado!";
        correctCodeArea.style.display = "none"; // Ocultamos el código correcto
    } else {
        // Si el código es incorrecto
        popupMessage.textContent = "¡Código incorrecto!";
        correctCodeArea.style.display = "block";
        correctCodeArea.textContent = correctCode;
    }

  // Mostrar el pop-up
popup.style.display = "block";
  // Desactivar el botón para que no se pueda enviar más de una vez
checkBtn.disabled = true;
isSubmitted = true;
});