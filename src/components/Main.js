import './Main.css';
import {
  populateEditTaskForm,
  populateListOption,
  populateMainContent,
  renderStateBtn,
} from '../render';
import { toggleState } from '../crud';

const Main = () => {
  const main = document.createElement('main');
  main.classList.add('main');

  main.addEventListener('click', (e) => {
    if (e.target.classList.contains('list-card')) {
      const { content } = e.target.dataset;
      const button = document.querySelector(
        `.lists-menu [data-content="${content}"]`,
      );
      button.click();
    }

    if (e.target.dataset.type === 'add-list') {
      const newListModal = document.querySelector('.new-list-modal');
      newListModal.showModal();
    }

    if (e.target.dataset.type === 'delete-list') {
      const deleteModal = document.querySelector('.delete-list-modal');
      const listToDelete = deleteModal.querySelector('.list-to-delete');
      const deleteForm = deleteModal.querySelector('form');
      deleteForm.dataset.list = e.target.dataset.list;
      listToDelete.textContent = e.target.dataset.list;
      deleteModal.showModal();
    }

    if (e.target.dataset.type === 'edit-list') {
      const editListModal = document.querySelector('.edit-list-modal');
      const listToRename = editListModal.querySelector('.list-to-rename');
      const editForm = editListModal.querySelector('form');
      editForm.dataset.list = e.target.dataset.list;
      listToRename.textContent = e.target.dataset.list;
      editListModal.showModal();
    }

    if (e.target.dataset.type === 'add-task') {
      const newTaskModal = document.querySelector('.new-task-modal');
      populateListOption(newTaskModal);
      newTaskModal.showModal();
    }

    if (e.target.dataset.type === 'delete-task') {
      const deleteTaskModal = document.querySelector('.delete-task-modal');
      const taskToDelete = deleteTaskModal.querySelector('.task-to-delete');
      const deleteForm = deleteTaskModal.querySelector('form');
      deleteForm.dataset.id = e.target.dataset.id;
      deleteForm.dataset.list = e.target.dataset.list;
      taskToDelete.textContent = e.target.dataset.task;
      deleteTaskModal.showModal();
    }

    if (e.target.dataset.type === 'edit-task') {
      const editTaskModal = document.querySelector('.edit-task-modal');
      const taskToEdit = editTaskModal.querySelector('.task-to-edit');
      const editForm = editTaskModal.querySelector('form');
      editForm.dataset.id = e.target.dataset.id;
      editForm.dataset.list = e.target.dataset.list;
      taskToEdit.textContent = e.target.dataset.task;
      populateListOption(editTaskModal);
      populateEditTaskForm(editForm);
      editTaskModal.showModal();
    }

    if (e.target.dataset.type === 'toggle-state') {
      const { list, id } = e.target.dataset;
      toggleState(list, id);
      renderStateBtn(e.target);
    }
  });

  main.addEventListener('input', (e) => {
    if (e.target.nodeName === 'SELECT') {
      localStorage.setItem('sortBy', e.target.value);
      populateMainContent();
    }
  });

  return main;
};

export default Main;
