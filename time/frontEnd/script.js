const singUp = document.querySelector(".singup-section");
const singIn = document.querySelector(".singin-section");
const body = document.querySelector("body");

function showSingup() {
  (singUp.style.display = "flex"),
    (singIn.style.display = "none"),
    (body.style.position = "fixed"),
    (body.style.background =
      'url("/time/welcome.webp") no-repeat center/cover');
}

function showSingin() {
  (singIn.style.display = "flex"), (singUp.style.display = "none");
}

function opentest() {
  document.querySelector("dialog").showModal();
}
function closetest() {
  document.querySelector("dialog").close();
}

// Cowndown
// Aqui las funciones para el countdown

let startTime,
  elapsedTime = 0,
  timerInterval = null, // se usa para almacenar el intervalo del temporizador
  totalTime = 0,
  isRunning = false;

function showDialog() {
  document.getElementById("timeDialog").showModal();
}

// Cerrar el diálogo
function closeDialog() {
  document.getElementById("timeDialog").close();
}

// Establecer el tiempo inicial
let initialTime = 0;

function setInitialTime() {
  const minutes = parseInt(document.getElementById("minutes").value) || 0;
  const seconds = parseInt(document.getElementById("seconds").value) || 0;

  // Convertir a milisegundos
  totalTime = (minutes * 60 + seconds) * 1000;
  initialTime = totalTime; // Guardar el tiempo inicial
  elapsedTime = 0;

  // Mostrar el tiempo inicial en el countdown
  document.getElementById("countdown").textContent = timeToString(totalTime);

  closeDialog();
}

// Iniciar el cronómetro en reversa
function startCountdown() {
  if (isRunning) {
    alert("El countdown ya está en marcha.");
    return;
  }

  isRunning = true;
  startTime = Date.now();

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;

    const timeLeft = totalTime - elapsedTime;

    // Actualizar la visualización
    document.getElementById("countdown").textContent = timeToString(
      Math.max(timeLeft, 0)
    );

    // Detener si llega a 0
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      isRunning = false;
      alert("¡El tiempo se ha agotado!");
    }
  }, 1000);
}

// Pausar el countdown
function pauseCountdown() {
  if (!isRunning) {
    alert("El countdown no está en marcha.");
    return;
  }

  clearInterval(timerInterval);
  totalTime -= elapsedTime;
  isRunning = false;
}

// Reiniciar el countdown
function resetCountdown() {
  if (!isRunning) {
    clearInterval(timerInterval);
    elapsedTime = 0;
    isRunning = false;
    totalTime = initialTime;
    document.getElementById("countdown").textContent = timeToString(totalTime);
  } else {
    alert("El countdown está en marcha.");
  }
}

// cronometro

// Estado del cronómetro

function timeToString(time) {
  // Convierte el tiempo en una cadena de formato HH:MM:SS (en un string)
  const hrs = Math.floor(time / 3600000) // convierte el tiempo en horas (1 hora = 3600000 ms) donde ms = milisegundos
    .toString() // convierte el número en una cadena
    .padStart(2, "0"); // para que siempre tenga dos dígitos
  const mins = Math.floor((time % 3600000) / 60000)
    .toString()
    .padStart(2, "0");
  const secs = Math.floor((time % 60000) / 1000)
    // esta formula funciona para obtener los segundos restantes
    // donde
    .toString()
    .padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
}

// Iniciar el cronómetro
function startCronometro() {
  // Verifica si el cronómetro ya está en marcha
  if (isRunning) {
    alert("El cronómetro ya está en marcha.");
    return;
  }

  // Configurar el estado del cronómetro como activo
  isRunning = true;
  startTime = Date.now() - elapsedTime;

  // Inicia el intervalo para actualizar el tiempo
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    document.getElementById("cronometro").textContent =
      timeToString(elapsedTime);
  }, 1000);
}

// Pausar el cronómetro
function pauseCronometro() {
  if (!isRunning) {
    alert("El cronómetro no está en marcha.");
    return;
  }

  // Detiene el intervalo y actualiza el estado
  clearInterval(timerInterval);
  isRunning = false;
}

// Reiniciar el cronómetro
function resetCronometro() {
  // Detener cualquier intervalo activo y restablecer variables
  clearInterval(timerInterval);
  elapsedTime = 0;
  isRunning = false;
  document.getElementById("cronometro").textContent = "00:00:00";
}
