// Variables
const input = document.getElementById('carta-texto');
const button = document.getElementById('criar-carta');
const card = document.getElementById('carta-gerada');
const classStyle = ['newspaper', 'magazine1', 'magazine2'];
const classSize = ['medium', 'big', 'reallybig'];
const classSlope = ['skewleft', 'skewright'];
const count = document.getElementById('carta-contador');

// Creating spans from the typed phrase
function createSpan() {
  const words = input.value.split(' ');
  for (let i = 0; i < words.length; i += 1) {
    // Generating class names randomly
    const style = classStyle[Math.floor(Math.random() * classStyle.length)];
    const size = classSize[Math.floor(Math.random() * classSize.length)];
    const slope = classSlope[Math.floor(Math.random() * classSlope.length)];
    // Creating the span
    const span = document.createElement('span');
    span.style.cursor = 'pointer';
    span.className = style;
    span.classList.add(size);
    span.classList.add(slope);
    span.innerText = words[i];
    card.appendChild(span);
  }
  // Count words
  count.innerText = words.length;
}
// Button click event
button.addEventListener('click', function () {
  card.innerHTML = '';// Clear previous generated phrase
  createSpan();
});
// Event to chage word style

card.addEventListener('click', function (event) {
  const word = document.querySelectorAll('span');
  const allStyles = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright'];
  if (word !== null) {
    const index = Math.floor(Math.random() * allStyles.length);
    event.target.className = allStyles[index];
  }
});
