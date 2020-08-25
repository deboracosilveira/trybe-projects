// Variables
const newTask = document.getElementById('texto-tarefa');
const createTask = document.getElementById('criar-tarefa');
const deleteAll = document.getElementById('apaga-tudo');
const deleteCompletedTasks = document.getElementById('remover-finalizados');
const list = document.getElementById('lista-tarefas');
const saveTasks = document.getElementById('salvar-tarefas');
const buttons = document.querySelectorAll('button');
const deleteSelectedTask = document.getElementById('remover-selecionado');
const moveUp = document.getElementById('mover-cima');
const moveDown = document.getElementById('mover-baixo');

// New item is created when the user press the button
function addItem() {
  if (newTask.value !== '') { // Do not accept an empty taks
    const task = document.createElement('li');
    task.innerText = newTask.value;
    list.appendChild(task);
    newTask.value = '';
  }
}
createTask.addEventListener('click', addItem);
// Select task and change color background
list.addEventListener('click', (event) => {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').style.backgroundColor = 'white';
    document.querySelector('.selected').classList.remove('selected');
  }
  event.target.style.backgroundColor = 'rgb(128,128,128)';
  event.target.classList.add('selected');
});
// Change buttons cursor type
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].style.cursor = 'pointer';
}
// Setting a completed task
list.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});
// Delete completed tasks
function deleteCompleted() {
  const items = document.querySelectorAll('.completed');
  for (let i = 0; i < items.length; i += 1) {
    items[i].parentNode.removeChild(items[i]);
  }
}
deleteCompletedTasks.addEventListener('click', deleteCompleted);
// Delete all tasks
function deleteAllTasks() {
  const items = document.querySelector('ol');
  items.innerHTML = '';
}
deleteAll.addEventListener('click', deleteAllTasks);
// Delete selected item
deleteSelectedTask.addEventListener('click', function () {
  const item = document.querySelector('.selected');
  item.parentNode.removeChild(item);
});
// Set Local storage
function setLocalStorage() {
  localStorage.clear();
  const taskList = document.querySelectorAll('li');
  for (let i = 0; i < taskList.length; i += 1) {
    const className = taskList[i].className;
    const task = taskList[i].innerHTML;
    const taskIndex = `Task ${i}`;
    const classIndex = `Class ${i}`;
    localStorage.setItem(taskIndex, task);
    localStorage.setItem(classIndex, className);
  }
  localStorage.setItem('numberOfItems', taskList.length);
}
saveTasks.addEventListener('click', setLocalStorage);
// Get local storage when load page
window.onload = function () {
  const index = localStorage.getItem('numberOfItems');
  for (let i = 0; i < index; i += 1) {
    const item = document.createElement('li');
    item.className = localStorage.getItem(`Class ${i}`);
    list.appendChild(item).innerHTML = localStorage.getItem(`Task ${i}`);// Load list content
  }
};
// Move item up
moveUp.addEventListener('click', function () {
  const selectedTask = document.querySelector('.selected');
  const tasks = document.querySelectorAll('li');// Alert that is not possible to move up more
  if (selectedTask !== tasks[0]) {
    const previousTask = selectedTask.previousElementSibling;
    const previousTaskInnerHTML = previousTask.innerHTML;
    previousTask.innerText = selectedTask.innerHTML;// Set selected task to previous position
    previousTask.classList.add('selected');// Keep style on selected task
    previousTask.style.backgroundColor = 'rgb(128,128,128)';

    if (selectedTask.classList.contains('completed')) { // Bring style when move
      if (!previousTask.classList.contains('completed')) {
        previousTask.classList.add('completed');
        selectedTask.classList.remove('completed');
      } else {
        previousTask.classList.add('completed');
        selectedTask.classList.add('completed');
      }
    } else if (previousTask.classList.contains('completed')) {
      previousTask.classList.remove('completed');
      selectedTask.classList.add('completed');
    }
    selectedTask.classList.remove('selected');// Take out style from previous task
    selectedTask.style.backgroundColor = '';

    selectedTask.innerHTML = previousTaskInnerHTML;// Set previous task to next position
  } else {
    alert('A tarefa já está na primeira posição.');
  }
});
// Move item down
moveDown.addEventListener('click', function () {
  const selectedTask = document.querySelector('.selected');

  const tasks = document.querySelectorAll('li');// Alert that is not possible to move down more
  if (selectedTask !== tasks[tasks.length - 1]) {
    const nextTask = selectedTask.nextElementSibling;
    const nextTaskInnerHTML = nextTask.innerHTML;

    nextTask.innerText = selectedTask.innerHTML;// Set selected task to next position
    nextTask.classList.add('selected');// Keep style on selected task
    nextTask.style.backgroundColor = 'rgb(128,128,128)';

    if (selectedTask.classList.contains('completed')) { // Bring style when move
      if (!nextTask.classList.contains('completed')) {
        nextTask.classList.add('completed');
        selectedTask.classList.remove('completed');
      } else {
        nextTask.classList.add('completed');
        nextTask.classList.add('completed');
      }
    } else if (nextTask.classList.contains('completed')) {
      nextTask.classList.remove('completed');
      selectedTask.classList.add('completed');
    }
    selectedTask.classList.remove('selected');// Take out style from previous task
    selectedTask.style.backgroundColor = '';

    selectedTask.innerHTML = nextTaskInnerHTML;// Set previous task to next position
  } else {
    alert('A tarefa já está na última posição.');
  }
});
