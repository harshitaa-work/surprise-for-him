function nextPage(pageNumber) {
document.querySelectorAll(’.page’).forEach(p => p.classList.remove(‘active’));
document.getElementById(‘page’ + pageNumber).classList.add(‘active’);
}

function startExperience() {
nextPage(2);
typeText();
}

// Attach button AFTER page loads
document.addEventListener(“DOMContentLoaded”, function () {
const btn = document.getElementById(“startBtn”);
if (btn) {
btn.addEventListener(“click”, startExperience);
}
});

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

if (i < text.length) {
el.innerHTML += text.charAt(i);
i++;
setTimeout(typeText, 40);
} else {
setTimeout(() => nextPage(3), 1500);
}
}