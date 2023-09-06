import './Modals.css';
import {
  containsList,
  addNewList,
  deleteList,
  addTask,
  renameList,
} from '../crud';
import { populateListOption, updateUI } from '../render';

const newListModal = () => {
  const markup = `
  <dialog class="new-list-modal">
    <form class="new-list-form" method="dialog">
      <div class="input-field">
        <label for="new-list-name">New List Name:</label>
        <input id="new-list-name" type="text">
      </div>
      <menu class="modal-menu">
        <button class="modal-btn btn-cancel">Cancel</button>
        <button class="modal-btn btn-create" type="button">Create</button>
      </menu>
    </form>
  </dialog>
  `;

  const modal = new DOMParser()
    .parseFromString(markup, 'text/html')
    .querySelector('.new-list-modal');

  const form = modal.querySelector('form');
  const textInput = form.querySelector('input');
  const createBtn = form.querySelector('.btn-create');

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.close();
    }
    if (e.target === createBtn) {
      const newName = textInput.value.trim();
      if (newName && !containsList(newName)) {
        addNewList(newName);
        localStorage.setItem('content', newName);
        updateUI();
        modal.close();
        const newTaskDialogModal = document.querySelector('.new-task-modal');
        populateListOption(newTaskDialogModal);
      }
    }
  });

  modal.addEventListener('close', () => {
    textInput.value = '';
  });

  return modal;
};

const editListModal = () => {
  const markup = `
  <dialog class="edit-list-modal">
    <form class="edit-list-form" method="dialog">
      <div class="modal-prompt">Rename <span class="list-to-rename"></span> list</div>
      <div class="input-field">
        <label for="edit-list-name">Enter new name:</label>
        <input id="edit-list-name" type="text">
      </div>
      <menu class="modal-menu">
        <button class="modal-btn btn-cancel">Cancel</button>
        <button class="modal-btn btn-rename" type="button">Rename</button>
      </menu>
    </form>
  </dialog>
  `;

  const modal = new DOMParser()
    .parseFromString(markup, 'text/html')
    .querySelector('.edit-list-modal');

  const form = modal.querySelector('form');
  const textInput = form.querySelector('input');
  const renameBtn = form.querySelector('.btn-rename');

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.close();
    }
    if (e.target === renameBtn) {
      const newName = textInput.value.trim();
      if (newName && !containsList(newName)) {
        const oldName = renameBtn.form.dataset.list;
        renameList(oldName, newName);
        localStorage.setItem('content', newName);
        updateUI();
        modal.close();
      }
    }
  });

  modal.addEventListener('close', () => {
    textInput.value = '';
  });

  return modal;
};

const deleteListModal = () => {
  const markup = `
  <dialog class="delete-list-modal">
    <form class="delete-list-form" method="dialog">
      <div class="modal-prompt">
      Are you sure you want to <b>delete</b> list <span class="list-to-delete"></span>?
      </div>
      <menu class="modal-menu">
        <button class="modal-btn btn-no">NO</button>
        <button class="modal-btn btn-yes" data-action="delete-list">YES</button>
      </menu>
    </form>
  </dialog>
  `;

  const modal = new DOMParser()
    .parseFromString(markup, 'text/html')
    .querySelector('.delete-list-modal');

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.close();
    }
    if (e.target.dataset.action === 'delete-list') {
      const { list } = e.target.form.dataset;
      deleteList(list);
      localStorage.setItem('content', 'Lists');
      updateUI();
    }
  });

  return modal;
};

function isFormValid(form) {
  const title = form.elements.title.value.trim();
  if (title.length === 0) return false;

  const dueDate = new Date(form.elements['due-date'].value).toString();
  if (dueDate === 'Invalid Date') return false;

  const { priority } = form.elements;
  if (priority.value === '') return false;

  const { list } = form.elements;
  if (!list || list.value === '') return false;

  return true;
}

const newTaskModal = () => {
  const markup = `
  <dialog class="new-task-modal">
    <form class="new-task-form" method="dialog">
      <div class="modal-prompt">
        New Task
      </div>
      <div class="new-task-fields">
        <div class="field-title">
          <label for="title">Title:</label>
          <textarea id="title"></textarea>
        </div>
        <div class="field-due-date">
          <label for="due-date">Due Date:</label>
          <input id="due-date" type="date">
        </div>
        <div class="field-priority">
          <label for="priority">Priority:</label>
          <select id="priority">
            <option value="">--Please choose an option--</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
            <option value="None">None</option>
          </select>
        </div>
        <div class="field-list">
          <label for="list">List:</label>
          <div class='list-option'></div>
        </div>
        <div class="field-notes">
          <label for="notes">Notes:</label>
          <textarea id="notes" rows="4"></textarea>
        </div>
      </div>
      <menu class="modal-menu">
        <button class="modal-btn btn-cancel">CANCEL</button>
        <button class="modal-btn btn-create" type="button">CREATE</button>
      </menu>
    </form>
  </dialog>
  `;

  const modal = new DOMParser()
    .parseFromString(markup, 'text/html')
    .querySelector('.new-task-modal');

  const form = modal.querySelector('form');
  const createBtn = modal.querySelector('.btn-create');

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.close();
    }

    if (e.target.dataset.type === 'add-list') {
      const addNewListModal = document.querySelector('.new-list-modal');
      addNewListModal.showModal();
    }

    if (e.target === createBtn) {
      if (isFormValid(form)) {
        addTask(form);
        modal.close();
        updateUI();
      } else {
        console.log('CONTAINS AN INVALID INPUT FIELD');
      }
    }
  });

  modal.addEventListener('close', () => {
    form.reset();
  });

  return modal;
};

export { newListModal, deleteListModal, editListModal, newTaskModal };
