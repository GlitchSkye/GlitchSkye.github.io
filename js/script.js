  const greetingElement = document.getElementById("greeting");
  const now = new Date();
  const hour = now.getHours();

  let greetingText = "Hello";

  if (hour >= 4 && hour < 12) {
    greetingText = "Good Morning";
  } else if (hour >= 12 && hour < 18) {
    greetingText = "Good Afternoon";
  } else {
    greetingText = "Good Evening";
  }
  greetingElement.innerHTML = greetingText;


const trailLength = 10;
const trailDots = [];

for (let i = 0; i < trailLength; i++) {
  const dot = document.createElement('div');
  dot.classList.add('cursor-trail');
  document.body.appendChild(dot);
  trailDots.push(dot);
}

let mouseX = 0, mouseY = 0;
let positions = Array(trailLength).fill({ x: 0, y: 0 });

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateTrail() {
  positions.pop();
  positions.unshift({ x: mouseX, y: mouseY });

  trailDots.forEach((dot, i) => {
    const pos = positions[i];
    if (!pos) return;
    dot.style.left = pos.x + 'px';
    dot.style.top = pos.y + 'px';

    // scale & fade older dots
    const scale = 1 - i * 0.07;
    const opacity = 0.8 - i * 0.08;
    dot.style.transform = `translate(-50%, -50%) scale(${scale})`;
    dot.style.opacity = opacity > 0 ? opacity : 0;
  });

  requestAnimationFrame(animateTrail);
}

animateTrail();