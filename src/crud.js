import { parseISO } from 'date-fns';
import Lists from './lists';

function containsList(newName) {
  const todo = new Lists();
  const listsNames = Object.keys(todo.lists).map((list) => list.toLowerCase());

  return listsNames.includes(newName.toLowerCase());
}

function addNewList(newName) {
  const todo = new Lists();
  todo.lists[newName] = [];
  localStorage.setItem('lists', JSON.stringify(todo.lists));
}

function renameList(oldName, newName) {
  const todo = new Lists();
  todo.lists[newName] = todo.lists[oldName];
  delete todo.lists[oldName];
  todo.lists[newName].forEach((task) => {
    const object = task;
    object.list = newName;
  });
  localStorage.setItem('lists', JSON.stringify(todo.lists));
}

function deleteList(list) {
  const todo = new Lists();
  delete todo.lists[list];
  localStorage.setItem('lists', JSON.stringify(todo.lists));
}

function addTask(form) {
  const LEVELS = ['None', 'Low', 'Medium', 'High'];
  const title = form.elements.title.value.trim();
  const dueDate = parseISO(form.elements['due-date'].value);
  const priority = form.elements.priority.value;
  const priorityAsNumber = LEVELS.indexOf(priority);
  const list = form.elements.list.value;
  const notes = form.elements.notes.value;
  const id = Math.floor(Math.random() * Date.now());
  const completedField = form.querySelector('#completed');
  let completed = false;
  if (completedField) {
    completed = completedField === 'true';
  }

  const newTask = {
    list,
    title,
    notes,
    dueDate,
    id,
    priority,
    priorityAsNumber,
    completed,
  };

  const todo = new Lists();
  todo.lists[newTask.list].push(newTask);
  localStorage.setItem('lists', JSON.stringify(todo.lists));
}

function deleteTask(list, id) {
  const todo = new Lists();
  const targetList = todo.lists[list];
  const targetId = Number(id);
  const taskIndex = targetList.findIndex((task) => task.id === targetId);
  targetList.splice(taskIndex, 1);
  localStorage.setItem('lists', JSON.stringify(todo.lists));
}

function toggleState(list, id) {
  const todo = new Lists();
  const targetList = todo.lists[list];
  const targetId = Number(id);
  const targetTask = targetList.find((task) => task.id === targetId);
  targetTask.completed = !targetTask.completed;
  localStorage.setItem('lists', JSON.stringify(todo.lists));
}

export {
  containsList,
  addNewList,
  renameList,
  deleteList,
  addTask,
  deleteTask,
  toggleState,
};
