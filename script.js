const months = document.getElementById('months');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const year = document.getElementById('year');
const loading = document.getElementById('loading');
const countdown = document.getElementById('countdown');

const currentYear = new Date().getFullYear();
const newYear = new Date(`January 01, ${currentYear + 1} 00:00:00`);

year.innerHTML = currentYear + 1;

function updateCountdown() {
    const currentTime = new Date();
    const diff = newYear - currentTime;

    const month = Math.floor(diff / 1000 / 60 / 60 / 24 / 30)
    const d = Math.floor(diff / 1000 / 60 / 60 / 24) % 30;
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    months.innerText = month
    days.innerHTML = d < 10 ? '0' + d : d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

// Loading

setTimeout(() => {
    loading.remove()
    countdown.style.display = 'flex';
}, 3000);

updateCountdown();

// Running updating count down function every second

setInterval(updateCountdown, 1000);