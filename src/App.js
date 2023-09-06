import Layout from './components/Layout';
import {
  deleteListModal,
  editListModal,
  newListModal,
  newTaskModal,
} from './components/Modals';
import { createRandomLists } from './random';
import { updateUI } from './render';

document.body.appendChild(Layout());
document.body.appendChild(newListModal());
document.body.appendChild(editListModal());
document.body.appendChild(deleteListModal());
document.body.appendChild(newTaskModal());

if (!localStorage.getItem('sortBy')) {
  localStorage.setItem('sortBy', 'date');
}
if (!localStorage.getItem('content')) {
  localStorage.setItem('content', 'Scheduled');
} else {
  localStorage.setItem('content', 'Today');
}

updateUI();

const demoBtn = document.querySelector('.demo-btn');
demoBtn.addEventListener('click', () => {
  localStorage.setItem('lists', JSON.stringify(createRandomLists()));
  localStorage.setItem('content', 'Today');
  updateUI();
});

window.addEventListener('keydown', (e) => {
  if (e.target.nodeName === 'INPUT' && e.key === 'Enter') {
    e.preventDefault();
    const button = e.target.form.querySelector('[type="button"]');
    button.click();
  }
});
