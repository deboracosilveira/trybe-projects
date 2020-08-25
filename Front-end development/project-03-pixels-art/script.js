// Variables
const box1 = document.querySelectorAll('.color')[0];
const box2 = document.querySelectorAll('.color')[1];
const box3 = document.querySelectorAll('.color')[2];
const box4 = document.querySelectorAll('.color')[3];
const pixelBoard = document.getElementById('pixel-board');
const buttonClear = document.getElementById('clear-board');
const inputBoardSize = document.getElementById('board-size');
const buttonGenerateBoard = document.getElementById('generate-board');

// Creating palette box
box1.style.backgroundColor = 'black';

// Generate random colors
function random(n) {
  n = Math.round(Math.random() * 256);
  return n;
}
function generateColor() {
  const rgb1 = 'rgb(' + random() + ', ' + random() + ', ' + random() + ')';
  const rgb2 = 'rgb(' + random() + ', ' + random() + ', ' + random() + ')';
  const rgb3 = 'rgb(' + random() + ', ' + random() + ', ' + random() + ')';

  box2.style.backgroundColor = rgb1;
  box3.style.backgroundColor = rgb2;
  box4.style.backgroundColor = rgb3;
}

// Select black when the page load
window.addEventListener('load', function () {
  box1.classList.add('selected');
  generateColor();
});
// Selecting box1
function box1Selected() {
    const item = document.querySelector('.selected');
    if (item) {
      item.classList.remove('selected');
      box1.classList.add('selected');
    }
};
// Selecting box2
function box2Selected() {
  const item = document.querySelector('.selected');
    if (item) {
      item.classList.remove('selected');
      box2.classList.add('selected');
    } 
};
// Selecting box3
function box3Selected() {
  const item = document.querySelector('.selected');
    if (item) {
      item.classList.remove('selected');
      box3.classList.add('selected');
    }
}
// Selecting box4
function box4Selected() {
  const item = document.querySelector('.selected');
    if (item) {
      item.classList.remove('selected');
      box4.classList.add('selected');
    };
};
// Painting pixel
pixelBoard.addEventListener('click', function (event) {
  event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
});
// Clear button
buttonClear.addEventListener('click', function () {
  const allPixels = document.querySelectorAll('.pixel')
  for (let i = 0; i < allPixels.length; i += 1) {
    allPixels[i].style.backgroundColor = 'white';
  }
});
// Generate board
buttonGenerateBoard.addEventListener('click', function () {
  let value = inputBoardSize.value;
  if (value < 5) value = 5;
  if (value > 50) value = 50;
  const totalOfPixels = value * value;
  const board = document.querySelector('.pixel-board');
  board.style.width = value * 40 + value * 2 + 'px';
  board.style.height = value * 40 + value * 2 + 'px';
  pixelBoard.innerHTML = '';
  
  for (let i = 0; i < totalOfPixels; i += 1) {
    const newBoard = document.createElement('div');
    newBoard.className = 'pixel';
    pixelBoard.appendChild(newBoard);
  }
});
