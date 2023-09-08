import './Header.css';
import bars from '../assets/bars.svg';
import plus from '../assets/plus.svg';
import { populateMainContent, colorNavSelection } from '../render';

const markupHeader = `
<header class="header">
  <div class="top-bar">
    <div class="hamburger-btn-wrapper">
      <button class="hamburger-btn">${bars}</button>
    </div>
    <h1>Todo List</h1>
    <div class="demo-btn-wrapper">
      <button class="demo-btn">DEMO</button>
    </div>
  </div>
  <div class="nav-bar-wrapper">
    <nav class="nav-bar">
      <menu class="main-menu">
        <li><button class="nav-bar-btn" data-content="Scheduled">Scheduled</button></li>
        <li><button class="nav-bar-btn" data-content="Today">Today</button></li>
        <li><button class="nav-bar-btn" data-content="This Week">This Week</button></li>
        <li><button class="nav-bar-btn" data-content="Completed">Completed</button></li>
      </menu>
      <menu class="lists-menu"></menu>
      <button class="nav-bar-btn add-list-btn" data-type="add-list"><span>${plus}</span>New List</button>
    </nav>
  </div>
</header>
`;

const Header = () => {
  const header = new DOMParser()
    .parseFromString(markupHeader, 'text/html')
    .querySelector('.header');

  const hamburgerBtn = header.querySelector('.hamburger-btn');
  const navBarWrapper = header.querySelector('.nav-bar-wrapper');
  const navBar = header.querySelector('.nav-bar');

  function toggleToolBar() {
    navBar.classList.toggle('show');
    navBarWrapper.classList.toggle('bgc-fade');
  }

  navBar.addEventListener('transitionrun', () => {
    if (navBar.classList.contains('show')) {
      navBarWrapper.classList.add('show');
    }
  });

  navBar.addEventListener('transitionend', () => {
    if (
      navBarWrapper.classList.contains('show') &&
      !navBar.classList.contains('show')
    ) {
      navBarWrapper.classList.remove('show');
      navBarWrapper.classList.remove('bgc-fade');
    }
  });

  header.addEventListener('click', (e) => {
    if (e.target === hamburgerBtn || e.target === navBarWrapper) {
      toggleToolBar();
    }
  });

  navBar.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
      if (e.target.dataset.type === 'add-list') {
        const newListModal = document.querySelector('.new-list-modal');
        newListModal.showModal();
      } else {
        localStorage.setItem('content', e.target.dataset.content);
        populateMainContent();
        colorNavSelection();
      }
    }
  });

  return header;
};

export default Header;
