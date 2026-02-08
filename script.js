function showCard() {
  const card = document.getElementById("card");
  card.classList.remove("hidden");
}

const symbols = ["💙", "🌸", "❤️"];

function createFlower() {
  const flower = document.createElement("div");
  flower.className = "flower";
  flower.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

  const treeX = window.innerWidth / 2;
  flower.style.left = treeX + (Math.random() * 220 - 110) + "px";
  flower.style.top = (window.innerHeight - 280) + "px";

  const size = Math.random() * 20 + 16;
  flower.style.fontSize = size + "px";

  const fallTime = Math.random() * 4 + 5;
  flower.style.animationDuration = `${fallTime}s, 6s`;

  document.body.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, fallTime * 1000);
}

setInterval(createFlower, 200);
