// Replace this date with the day you started the relationship
const startDate = new Date("2020-01-16T00:00:00");

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  const months = Math.floor((diff / (1000 * 60 * 60 * 24 * 30)) % 12);
  const days = Math.floor((diff / (1000 * 60 * 60 * 24)) % 30);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").textContent = 
    `${years}Y ${months}M ${days}D ${hours}H ${minutes}M ${seconds}S`;
}

setInterval(updateTimer, 1000);
updateTimer(); // initial call
