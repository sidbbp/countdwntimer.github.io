// Initialize the hour, minute, and second options
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// Populate the dropdowns with options
function populateDropdowns() {
    for (let i = 0; i < 24; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i < 10 ? "0" + i : i;
        hours.appendChild(option);
    }
    for (let i = 0; i < 60; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i < 10 ? "0" + i : i;
        minutes.appendChild(option);
        seconds.appendChild(option.cloneNode(true));
    }
}
populateDropdowns();

let countdownInterval;

// Function to start the countdown timer
function startCountdown() {
    const CountdownEl = document.getElementById("Timer");

    const startingHours = parseInt(hours.value, 10);
    const startingMinutes = parseInt(minutes.value, 10);
    const startingSeconds = parseInt(seconds.value, 10);

    let time = startingHours * 3600 + startingMinutes * 60 + startingSeconds;

    clearInterval(countdownInterval); // Clear any previous countdown

    countdownInterval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        if (time <= 0) {
            clearInterval(countdownInterval);
            CountdownEl.textContent = "00:00:00";
        } else {
            const hoursLeft = Math.floor(time / 3600);
            const minutesLeft = Math.floor((time % 3600) / 60);
            const secondsLeft = time % 60;

            const formattedTime = `${hoursLeft < 10 ? '0' : ''}${hoursLeft}:${minutesLeft < 10 ? '0' : ''}${minutesLeft}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;

            CountdownEl.textContent = formattedTime;
            time--;
        }
    }
}

// Function to reset the countdown timer
function resetCountdown() {
    clearInterval(countdownInterval);
    document.getElementById("Timer").textContent = "00:00:00";
    hours.value = "0";
    minutes.value = "0";
    seconds.value = "0";
}