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

function deleteList(list) {
  const todo = new Lists();
  delete todo.lists[list];
  localStorage.setItem('lists', JSON.stringify(todo.lists));
}

export { containsList, addNewList, deleteList };
