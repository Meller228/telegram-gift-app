const tg = window.Telegram.WebApp;
tg.expand();

const emoji = document.getElementById("emoji");
let isGift = false;

emoji.addEventListener("click", () => {
  isGift = !isGift;
  emoji.textContent = isGift ? "🎁" : "❤️";

  emoji.classList.add("animate");
  setTimeout(() => {
    emoji.classList.remove("animate");
  }, 250);

  tg.HapticFeedback.impactOccurred("medium");
});
