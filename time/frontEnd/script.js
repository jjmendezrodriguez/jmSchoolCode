const singUp = document.getElementById("singup-section");
const singIn = document.getElementById("singin-section");
const body = document.querySelector("body");
const homePage = document.querySelector(".practica");

function showSingup() {
  singUp.style.display = "flex";
  singIn.style.display = "none";
  body.style.position = "fixed";
  body.style.background = 'url("/time/welcome.webp") no-repeat center/cover';
  homePage.style.display = "none";
}

function showSingin() {
  singIn.style.display = "flex";
  singUp.style.display = "none";
  homePage.style.display = "none";
}

function opentest() {
  document.querySelector("dialog").showModal();
}

function closetest() {
  const alerta = document.querySelector("#alert-1");

  // Verificar si la alerta existe y ocultarla
  if (alerta) {
    alerta.style.display = "none"; // Cambiar la visibilidad de la alerta
  }

  // Cerrar el diálogo
  const dialog = document.querySelector("dialog");
  if (dialog) {
    dialog.close(); // Usar el método .close() para cerrar el diálogo
  }
}

let alertMsg = document.getElementById("alert-msg");
let myName = document.getElementById("name-el");

function test() {
  const nameInput = document.querySelector(".name-input"); // Elemento input
  const nameFill = nameInput.value; // Valor del input
  const alerta = document.querySelector("#alert-1");
  const nameBtn = document.querySelector(".name-btn");

  // Mensaje de alerta
  alertMsg.textContent = "Please enter your Name";

  // Validar si el campo está vacío
  if (nameFill === "" || nameFill === null) {
    alerta.style.display = "flex";
    alertMsg.style.transform = "scale(1.1)";
    alertMsg.style.transition = "transform 1s ease";
    nameBtn.classList.add("invalid"); // Botón en rojo
  } else {
    myName.textContent += nameFill;
    myName.style.textTransform = "capitalize";
    closetest();
  }

  // Restaurar transformaciones después de 200ms
  setTimeout(() => {
    alertMsg.style.transform = "scale(1)";
    alertMsg.style.textTransform = "uppercase";
  }, 200);

  // Validar entrada en tiempo real
  nameInput.addEventListener("input", () => {
    if (nameInput.value.trim().length > 0) {
      // trim() elimina los espacios en blanco
      nameBtn.classList.remove("invalid"); // Remover rojo si el campo es válido
      alerta.style.display = "none"; // Ocultar la alerta
    } else {
      nameBtn.classList.add("invalid"); // Mantener rojo si sigue vacío
    }
  });
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
