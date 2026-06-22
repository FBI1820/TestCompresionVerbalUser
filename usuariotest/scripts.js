// Esperamos a que cargue todo el HTML
document.addEventListener("DOMContentLoaded", function() {
    
    // --- LÓGICA DEL TEMPORIZADOR ---
    let minutosLimite = 15; // Esto lo leeremos del modelo Test luego
    let totalSeconds = minutosLimite * 60; 
    const timerElement = document.getElementById('countdown');

    if (timerElement) {
        const interval = setInterval(function() {
            let minutes = Math.floor(totalSeconds / 60);
            let seconds = totalSeconds % 60;

            // Formato 00:00
            if (seconds < 10) seconds = "0" + seconds;
            if (minutes < 10) minutes = "0" + minutes;

            timerElement.textContent = minutes + ":" + seconds;

            // Colores de alerta cuando queda poco tiempo
            if (totalSeconds <= 60) { // Último minuto
                timerElement.parentElement.style.backgroundColor = "#dc3545"; // Rojo
            } else if (totalSeconds <= 300) { // Últimos 5 minutos
                timerElement.parentElement.style.backgroundColor = "#ffc107"; // Amarillo
                timerElement.parentElement.style.color = "#333";
            }

            if (totalSeconds <= 0) {
                clearInterval(interval);
                finalizarExamenAutomatico();
            }
            totalSeconds--;
        }, 1000);
    }

    // --- LÓGICA DEL ENVÍO DEL FORMULARIO ---
    const form = document.getElementById('exam-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitamos que la página se recargue
        
        // Recopilamos las respuestas
        const formData = new FormData(form);
        let respuestas = {};
        for (let [key, value] of formData.entries()) {
            respuestas[key] = value;
        }

        console.log("Respuestas capturadas:", respuestas);
        alert("¡Test finalizado con éxito! Revisa la consola (F12) para ver tus respuestas simuladas.");
        
        // Aquí redirigiríamos a la página de resultados de OpenXava
    });

    function finalizarExamenAutomatico() {
        alert("¡El tiempo ha terminado! El test se enviará automáticamente con las respuestas marcadas hasta ahora.");
        form.requestSubmit(); // Dispara el envío del formulario
    }

    // --- LÓGICA DE LA PÁGINA DE BIENVENIDA ---
document.addEventListener("DOMContentLoaded", function() {
    const welcomeForm = document.getElementById('welcome-form');
    
    if (welcomeForm) {
        welcomeForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Capturamos el nombre ingresado por el usuario
            const nombre = document.getElementById('nombreEvaluado').value;
            
            // Lo guardamos temporalmente en el navegador para simular el registro de la sesión
            localStorage.setItem('nombreEstudiante', nombre);
            
            // Redirigimos automáticamente al examen (index.html)
            window.location.href = 'index.html';
        });
    }
});
});