// Highlight pink border in sync with CG movement (from back to front)
let highlightIndex = 0;
setInterval(() => {
  const layers = document.querySelectorAll('.vr_layer');
  layers.forEach(layer => layer.classList.remove('highlight'));
  if (layers.length === 0) return;
  // Omgekeerde richting: van voor naar achter
  const reverseIndex = layers.length - 1 - highlightIndex;
  layers[reverseIndex].classList.add('highlight');
  setTimeout(() => {
    layers[reverseIndex].classList.remove('highlight');
  }, 500);
  highlightIndex = (highlightIndex + 1) % layers.length;
}, 950);
// Vul triggers
const triggers = document.querySelector('.triggers');
for (let i = 0; i < 400; i++) {
  const trigger = document.createElement('div');
  trigger.className = 'trigger';
  triggers.appendChild(trigger);
}

// Vul VR lagen
const vr = document.querySelector('.vr');
const layerCount = 20;
const size = 350;
for (let i = 1; i <= layerCount; i++) {
  const layer = document.createElement('div');
  layer.className = 'vr_layer';
  layer.style.transform = `translateZ(${(i * size / layerCount) - (size / 2)}px)`;

  // Alleen CG tonen aan de achterkant (klein naar groot)
  if (i <= layerCount / 2) {
    const item = document.createElement('div');
    item.className = 'vr_layer_item';
    item.style.animationDelay = `${i * -210}ms`;
    // CG wordt van klein naar groot
    const scale = 0.5 + (i / (layerCount / 2)) * 0.5; // van 0.5 tot 1
    item.innerHTML = `
      <svg width="320" height="320" viewBox="-40 -40 320 320" style="transform: scale(${scale});">
        <g transform="rotate(-45 120 120)">
          <text x="30" y="220" font-family="MeltSwashes, Anton, sans-serif" font-size="210" fill="#ff69b4" stroke="#00bfff" stroke-opacity="1" stroke-width="7">C</text>
          <text x="120" y="230" font-family="MeltSwashes, Anton, sans-serif" font-size="110" fill="#00bfff" stroke="#ff69b4" stroke-opacity="1" stroke-width="10">G</text>
        </g>
      </svg>
    `;
    layer.appendChild(item);
  }
  // Voorkant (groot naar klein) wordt niet getoond
  vr.appendChild(layer);
}