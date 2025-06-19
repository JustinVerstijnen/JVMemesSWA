function updateCountdowns() {
  const now = new Date().getTime();
  document.querySelectorAll('.concert').forEach(card => {
    const date = new Date(card.dataset.datetime).getTime();
    const distance = date - now;

    if (distance <= 0) {
      card.querySelector('.countdown').innerText = "Concert bezig of afgelopen";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    card.querySelector('.countdown').innerText = `${days}d ${hours}u ${minutes}m`;
  });
}

setInterval(updateCountdowns, 60000);
window.onload = updateCountdowns;
