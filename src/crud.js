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

  const newTask = {
    list,
    title,
    notes,
    dueDate,
    id,
    priority,
    priorityAsNumber,
  };

  const todo = new Lists();
  todo.lists[newTask.list].push(newTask);
  localStorage.setItem('lists', JSON.stringify(todo.lists));
}

export { containsList, addNewList, renameList, deleteList, addTask };
