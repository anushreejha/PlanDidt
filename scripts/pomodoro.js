document.addEventListener("DOMContentLoaded", function () {
    // DOM elements
    const startBtn = document.getElementById("start");
    const stopBtn = document.getElementById("stop");
    const resetBtn = document.getElementById("reset");
    const timerDisplay = document.getElementById("timer");

    // Pomodoro timer variables
    let timer;
    let minutes = 25;
    let seconds = 0;
    let isRunning = false;

    // Format timer display
    function formatTime(time) {
        return time < 10 ? `0${time}` : `${time}`;
    }

    // Update timer display
    function updateDisplay() {
        timerDisplay.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
    }

    // Start timer
    function startTimer() {
        if (!isRunning) {
            timer = setInterval(function () {
                if (seconds === 0) {
                    if (minutes === 0) {
                        stopTimer();
                        return;
                    }
                    minutes--;
                    seconds = 59;
                } else {
                    seconds--;
                }
                updateDisplay();
            }, 1000);
            isRunning = true;
        }
    }

    // Stop timer
    function stopTimer() {
        clearInterval(timer);
        isRunning = false;
    }

    // Reset timer
    function resetTimer() {
        stopTimer();
        minutes = 25;
        seconds = 0;
        updateDisplay();
    }

    // Event listeners
    startBtn.addEventListener("click", startTimer);
    stopBtn.addEventListener("click", stopTimer);
    resetBtn.addEventListener("click", resetTimer);

    // Initial display
    updateDisplay();
});
