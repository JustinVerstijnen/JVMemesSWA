function updateCountdowns() {
  const now = Date.now();
  document.querySelectorAll('.concert-card').forEach(card => {
    const diff = new Date(card.dataset.datetime) - now;
    const cnt = card.querySelector('.countdown');
    if (diff <= 0) {
      cnt.textContent = "Bezig of afgelopen";
    } else {
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000)/3600000);
      const m = Math.floor((diff % 3600000)/60000);
      cnt.textContent = `${d}d ${h}u ${m}m`;
    }
  });
}
window.addEventListener('DOMContentLoaded', () => {
  updateCountdowns();
  setInterval(updateCountdowns, 60000);
});
