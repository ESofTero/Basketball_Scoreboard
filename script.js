
let homePoints = 0;
let guestPoints = 0;
let periodNumber = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = null; // Almacena el temporizador
let isPaused = false; // Estado de pausa


let homeScore = document.getElementById("home_score");
let guestScore = document.getElementById("guest_score");
let numberPeriod = document.getElementById("number_of_period")
const hourDisplay = document.getElementById("t-hour");
const minuteDisplay = document.getElementById("t-minutes");
const secondDisplay = document.getElementById("t-seconds");

function plusOneHome() { 
    homePoints += 1; 
    homeScore.innerText = homePoints; 
}
function plusTwoHome() { 
    homePoints += 2; 
    homeScore.innerText = homePoints; 
}
function plusThreeHome() { 
    homePoints += 3; 
    homeScore.innerText = homePoints; 
}

function plusOnePeriod() {
    periodNumber += 1; 
    numberPeriod.innerText = periodNumber; 
    pauseTimer()
}

function plusOneGuest() { 
    guestPoints += 1; 
    guestScore.innerText = guestPoints; 
}
function plusTwoGuest() { 
    guestPoints += 2; 
    guestScore.innerText = guestPoints; 
}
function plusThreeGuest() { 
    guestPoints += 3; 
    guestScore.innerText = guestPoints; 
}

// Función para actualizar el temporizador en pantalla
// Nota: Esta forma de if & else ya la conocía por el juego que hice
function updateTimer() {
    hourDisplay.textContent = hours < 10 ? `0${hours}` : hours;
    minuteDisplay.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondDisplay.textContent = seconds < 10 ? `0${seconds}` : seconds;
}

function incrementTime() {
    if (!isPaused) { // Solo avanza si NO está en pausa
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        updateTimer();
    }
}

// Función para iniciar el temporizador desde donde se quedó
function startTimer() {
    if (!timer) { // Evitar múltiples temporizadores
        timer = setInterval(incrementTime, 1000); // Aumenta cada 1 segundo
    }
    isPaused = false;
}

function pauseTimer() {
    clearInterval(timer);
    timer = null; // Detener y limpiar el temporizador
    isPaused = true;
}

function continueTimer() {
    startTimer();
    if (isPaused && !timer) { // Solo continúa si estaba pausado y no hay temporizador activo
        startTimer();
    }
}

function initialConditions() {
    homePoints = 0;
    guestPoints = 0;
    periodNumber = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    isPaused = false;

    homeScore.innerText = homePoints;
    guestScore.innerText = guestPoints;
    numberPeriod.innerText = periodNumber; 
    updateTimer();

    // Reiniciar temporizador
    stopTimer();
    pauseTimer();
}

// Función para detener completamente el temporizador
function stopTimer() {
    clearInterval(timer);
    timer = null;
}