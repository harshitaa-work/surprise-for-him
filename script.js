25”}
function nextPage(pageNumber) {
document.querySelectorAll(’.page’).forEach(p => p.classList.remove(‘active’));
document.getElementById(‘page’ + pageNumber).classList.add(‘active’);
}

function startExperience() {
nextPage(2);
typeText();
}

const text = `Okay now you’re officially in my trap 💀🔥

Something very illegal is about to happen…

Relax… not that illegal 😌

Okay fine… I was a little scared too 🥲

But then I thought…
some risks are worth taking 😏

So I did something…`;

let i = 0;

function typeText() {
const el = document.getElementById(“typingText”);
const speed = 40;

if (i < text.length) {
el.innerHTML += text.charAt(i);
i++;
setTimeout(typeText, speed);
} else {
setTimeout(() => nextPage(3), 1500);
}
}

/* Confetti (safe load after page ready) */
window.onload = function () {
const canvas = document.getElementById(“confetti”);
if (!canvas) return;

const ctx = canvas.getContext(“2d”);

function resizeCanvas() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener(“resize”, resizeCanvas);

let pieces = [];

for (let i = 0; i < 100; i++) {
pieces.push({
x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
size: Math.random() * 5 + 2,
speed: Math.random() * 3 + 1
});
}

function updateConfetti() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = “white”;

pieces.forEach(p => {
  ctx.fillRect(p.x, p.y, p.size, p.size);
  p.y += p.speed;
  if (p.y > canvas.height) {
    p.y = 0;
    p.x = Math.random() * canvas.width;
  }
});
requestAnimationFrame(updateConfetti);

}

updateConfetti()