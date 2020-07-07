// Variables
const rgbColor = document.getElementById('rgb-color');
const balls = document.querySelectorAll('.ball');
const answer = document.getElementById('answer');
const reset = document.getElementById('reset-game');
const score = document.getElementById('score');
let points = 0;

// Generating a random number multiple of 255
function random() {
  const randomNumber = Math.round(Math.random() * 255);
  return randomNumber;
}
// Generating random rgb
function generateRgb() {
  const rgb = '(' + random() + ', ' + random() + ', ' + random() + ')';
  rgbColor.innerText = rgb;
}
// Comparing user's answer and the correct one
for (let i = 0; i < balls.length; i += 1) {
  balls[i].style.cursor = 'pointer';
  balls[i].addEventListener('click', function (e) {
    let correctAnswer = rgbColor.innerText;
    correctAnswer = 'rgb' + correctAnswer;
    const userAnswer = e.target.style.backgroundColor;

    if (userAnswer === correctAnswer) {
      answer.innerText = 'Acertou!';
      points += 3;
      score.innerHTML = points;
    } else {
      answer.innerText = 'Errou! Tente novamente';
    }
  });
}
// Generating balls background color
function ballsBgColor() {
  const randomNumber = Math.floor(Math.random() * balls.length);// Random number between 0 and 5
  for (let i = 0; i < balls.length; i += 1) {
    if (i === randomNumber) { // To put the answer in a random ball
      let correctAnswer = rgbColor.innerText;
      correctAnswer = 'rgb' + correctAnswer;
      balls[i].style.backgroundColor = correctAnswer;
    } else {
      const rgb = 'rgb(' + random() + ', ' + random() + ', ' + random() + ')';
      balls[i].style.backgroundColor = rgb;
    }
  }
}
// Restart button
reset.addEventListener('click', function () {
  answer.innerText = 'Escolha uma cor';
  generateRgb();
  ballsBgColor();
});
// To do when load window
window.onload = function () {
  answer.innerText = 'Escolha uma cor';
  generateRgb();
  ballsBgColor();
};
