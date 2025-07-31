const container = document.getElementById("heartContainer");

function crearCorazon() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";
  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(crearCorazon, 400);
// Generar corazones flotando
for (let i = 0; i < 20; i++) {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.setProperty("--x", Math.random());
  heart.style.animationDuration = `${5 + Math.random() * 5}s`;
  document.body.appendChild(heart);
  }