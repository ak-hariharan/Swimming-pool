let minutes = 0;
let seconds = 0;
let temperature = 29;
let timerInterval;
let isRunning = false;

const timer = document.querySelector('.timer-min-sec');
const heat = document.querySelector('.temp');
const max_temp = document.querySelector('.max-temp');
const toggle_button = document.querySelector('.heat-pump-button');

function updateTimerDisplay() {
  timer.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  
  heat.textContent = `${String(temperature)}\u00B0C`;

  if (temperature === 30) {
   max_temp.textContent = `Heat Pump reaches it's maximum temperature`;
  }
}

function toggleTimer() {
  if (isRunning) {
    clearInterval(timerInterval);
  } else {
    timerInterval = setInterval(() => {
      seconds += 1;

      if (seconds === 60) {
        seconds = 0;
        minutes += 1;
        temperature += 1;
      }

      updateTimerDisplay();
    }, 1000);

  }
  isRunning = !isRunning; 
}

toggle_button.addEventListener('click', toggleTimer);
