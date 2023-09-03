import './Modals.css';
import { containsList, addNewList, deleteList } from '../crud';
import { updateUI } from '../render';

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

export { newListModal, deleteListModal };
