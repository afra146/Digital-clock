// =======================
// DIGITAL CLOCK
// =======================

function updateClock() {

    const now = new Date();

    const time24 = now.toLocaleTimeString("en-GB", {
        hour12: false
    });

    const time12 = now.toLocaleTimeString("en-US", {
        hour12: true
    });

    const timeElement = document.getElementById("time");
    const time12Element = document.getElementById("time12");
    const dateElement = document.getElementById("date");
    const greetingElement = document.getElementById("greeting");

    if (timeElement) {
        timeElement.innerHTML = time24;
    }

    if (time12Element) {
        time12Element.innerHTML = "12 Hour : " + time12;
    }

    if (dateElement) {
        dateElement.innerHTML = now.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }

    if (greetingElement) {

        let hour = now.getHours();

        if (hour < 12) {
            greetingElement.innerHTML = "🌅 Good Morning";
        }
        else if (hour < 17) {
            greetingElement.innerHTML = "☀️ Good Afternoon";
        }
        else {
            greetingElement.innerHTML = "🌙 Good Evening";
        }
    }
}

setInterval(updateClock, 1000);
updateClock();


// =======================
// THEME TOGGLE
// =======================

function toggleTheme() {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    }
    else {
        localStorage.setItem("theme", "dark");
    }
}

window.addEventListener("load", () => {

    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
    }

});


// =======================
// FULLSCREEN
// =======================

function goFullScreen() {

    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    }

}


// =======================
// ALARM CLOCK
// =======================

let alarmTime = "";

function setAlarm() {

    const alarmInput =
        document.getElementById("alarmTime");

    const alarmStatus =
        document.getElementById("alarmStatus");

    if (!alarmInput) return;

    alarmTime = alarmInput.value;

    if (alarmStatus) {
        alarmStatus.innerHTML =
            "⏰ Alarm Set For : " + alarmTime;
    }
}

setInterval(() => {

    if (!alarmTime) return;

    const now = new Date();

    const currentTime =
        String(now.getHours()).padStart(2, "0") +
        ":" +
        String(now.getMinutes()).padStart(2, "0");

    if (currentTime === alarmTime) {

        alert("⏰ Alarm Ringing!");

        alarmTime = "";
    }

}, 1000);


// =======================
// STOPWATCH
// =======================

let stopwatchSeconds = 0;
let stopwatchInterval = null;

function startStopwatch() {

    if (stopwatchInterval !== null) {
        return;
    }

    stopwatchInterval = setInterval(() => {

        stopwatchSeconds++;

        let hrs =
            Math.floor(stopwatchSeconds / 3600);

        let mins =
            Math.floor((stopwatchSeconds % 3600) / 60);

        let secs =
            stopwatchSeconds % 60;

        const display =
            document.getElementById("stopwatch");

        if (display) {

            display.innerHTML =
                `${String(hrs).padStart(2, '0')}:` +
                `${String(mins).padStart(2, '0')}:` +
                `${String(secs).padStart(2, '0')}`;
        }

    }, 1000);
}

function stopStopwatch() {

    clearInterval(stopwatchInterval);

    stopwatchInterval = null;
}

function resetStopwatch() {

    clearInterval(stopwatchInterval);

    stopwatchInterval = null;

    stopwatchSeconds = 0;

    const display =
        document.getElementById("stopwatch");

    if (display) {
        display.innerHTML = "00:00:00";
    }
}


// =======================
// WORLD CLOCKS
// =======================

function updateWorldClock() {

    const india =
        document.getElementById("india");

    const london =
        document.getElementById("london");

    const newyork =
        document.getElementById("newyork");

    const tokyo =
        document.getElementById("tokyo");

    if (india) {
        india.innerHTML =
            new Date().toLocaleTimeString(
                "en-IN",
                {
                    timeZone: "Asia/Kolkata"
                }
            );
    }

    if (london) {
        london.innerHTML =
            new Date().toLocaleTimeString(
                "en-GB",
                {
                    timeZone: "Europe/London"
                }
            );
    }

    if (newyork) {
        newyork.innerHTML =
            new Date().toLocaleTimeString(
                "en-US",
                {
                    timeZone: "America/New_York"
                }
            );
    }

    if (tokyo) {
        tokyo.innerHTML =
            new Date().toLocaleTimeString(
                "ja-JP",
                {
                    timeZone: "Asia/Tokyo"
                }
            );
    }
}

setInterval(updateWorldClock, 1000);
updateWorldClock();