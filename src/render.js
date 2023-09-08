import penToSquare from './assets/pen-to-square.svg';
import trashCan from './assets/trash-can.svg';
import circlePlus from './assets/circle-plus.svg';
import toggleOn from './assets/toggle-on.svg';
import toggleOff from './assets/toggle-off.svg';
import Lists from './lists';

function colorNavSelection() {
  const content = localStorage.getItem('content');
  const navBarBtns = document.querySelectorAll('.nav-bar button');
  navBarBtns.forEach((btn) => {
    btn.classList.remove('current-content');
    if (btn.dataset.content === content) {
      btn.classList.add('current-content');
    }
  });
}

function populateListMenu() {
  const listsMenu = document.querySelector('.lists-menu');
  listsMenu.replaceChildren();
  const listsBtn = document.createElement('button');
  listsBtn.classList.add('lists-btn');
  listsBtn.dataset.content = 'Lists';
  listsBtn.textContent = 'Lists:';
  listsMenu.appendChild(listsBtn);
  const listsNames = new Lists().getListsNames();
  listsNames.forEach((list) => {
    const markup = `
    <li>
      <button class="nav-bar-btn" data-content="${list}">
        ${list}
      </button>
    </li>
    `;
    const listBtn = new DOMParser()
      .parseFromString(markup, 'text/html')
      .querySelector('li');
    listsMenu.appendChild(listBtn);
  });
}

function createTaskCard(task) {
  const completedIcon = `
  <span class="completed-icon ${task.completed ? 'icon-on' : ''}">${
    task.completed ? toggleOn : toggleOff
  }</span>
  `;
  const completedText = `
  <span class="completed-text ${
    task.completed ? 'text-on' : ''
  }">Completed</span>
  `;
  const markup = `
  <div class="task-card card-${task.priority.toLowerCase()}" data-id="${
    task.id
  }">
    <div class=".task-title">Title: ${task.title}</div>
    <div class=".task-dueDate">Due date: ${task.dueDate.toDateString()}</div>
    <div class=".task-priority">Priority: ${task.priority}</div>
    <div class=".task-list">List: ${task.list}</div>
    <div class=".task-notes">Notes: ${task.notes}</div>
    <menu class="task-menu">
      <button class="task-state ${
        task.completed ? 'task-completed' : ''
      }" data-type="toggle-state" data-list=${task.list} data-id="${
        task.id
      }">${completedIcon}${completedText}</button>
      <button class="edit-task-btn" data-type="edit-task" data-id="${
        task.id
      }" data-list="${task.list}" data-task="${
        task.title
      }">${penToSquare}</button>
      <button class="delete-task-btn" data-type="delete-task" data-id="${
        task.id
      }" data-list="${task.list}" data-task="${task.title}">${trashCan}</button>
    </menu>
  </div>
  `;
  const taskCard = new DOMParser()
    .parseFromString(markup, 'text/html')
    .querySelector('.task-card');

  return taskCard;
}

function createTasksGroup(tasks, group, heading, state) {
  let classText;
  let headingText;
  if (heading === 'Priority') {
    classText = `priority-${group.toLowerCase()}`;
    headingText = `${heading}: ${group}`;
  } else if (heading === 'Date') {
    classText = 'date-group';
    headingText = `${new Date(group).toDateString()}`;
  }
  const markup = `
  <div class="task-group ${classText}">
    <h3 class="group-title">${headingText}</h3>
    <div class="task-cards"></div>
  </div>
  `;
  const content = new DOMParser()
    .parseFromString(markup, 'text/html')
    .querySelector('.task-group');
  const taskCards = content.querySelector('.task-cards');
  tasks.forEach((task) => {
    if (!task.completed || state) {
      const taskCard = createTaskCard(task);
      taskCards.appendChild(taskCard);
    }
  });
  return content;
}

function getPrioritiesInOrder(tasksGrouped) {
  const priorities = ['High', 'Medium', 'Low', 'None'];
  const prioritiesListed = Object.keys(tasksGrouped);
  const filtered = priorities.filter((priority) =>
    prioritiesListed.includes(priority),
  );

  return filtered;
}

function getDatesInOrder(tasksGrouped) {
  const dates = Object.keys(tasksGrouped);
  dates.sort((a, b) => new Date(a) - new Date(b));

  return dates;
}

function createGroups(tasksGrouped, groupedBy, state = false) {
  const groups = [];
  if (groupedBy === 'priority') {
    const priorities = getPrioritiesInOrder(tasksGrouped);
    priorities.forEach((priority) => {
      const list = tasksGrouped[priority];
      Lists.sortByDate(list);
      if (list.some((task) => !task.completed) || state) {
        const tasksGroup = createTasksGroup(list, priority, 'Priority', state);
        groups.push(tasksGroup);
      }
    });
  } else if (groupedBy === 'date') {
    const dates = getDatesInOrder(tasksGrouped);
    dates.forEach((date) => {
      const list = tasksGrouped[date];
      Lists.sortByPriority(list);
      if (list.some((task) => !task.completed) || state) {
        const tasksGroup = createTasksGroup(list, date, 'Date', state);
        groups.push(tasksGroup);
      }
    });
  }

  return groups;
}

function createContent(tasks, sortBy, state) {
  const groupedBy = sortBy || localStorage.getItem('sortBy');
  let tasksGrouped;
  if (groupedBy === 'priority') {
    tasksGrouped = Lists.groupByPriority(tasks);
  } else if (groupedBy === 'date') {
    tasksGrouped = Lists.groupByDate(tasks);
  }
  const groups = createGroups(tasksGrouped, groupedBy, state);

  return groups;
}

function getContentTitleBar(textContent) {
  const sortyBy = localStorage.getItem('sortBy');
  const list = localStorage.getItem('content');
  const listMenu = `
  <menu class="list-menu">
    <button class="edit-list-btn" data-type="edit-list" data-list="${list}">${penToSquare}</button>
    <button class="delete-list-btn" data-type="delete-list" data-list="${list}">${trashCan}</button>
  </menu>
  `;
  const selectSort = `
  <select class="select-sort">
      <option value="date" ${sortyBy === 'date' ? 'selected' : ''}>date</option>
      <option value="priority" ${
        sortyBy === 'priority' ? 'selected' : ''
      }>priority</option>
  </select>
  `;
  const addTaskBtn = `
  <button class="add-task-btn" data-type="add-task">${circlePlus}New Task</button>
  `;
  const addListBtn = `
  <button class="add-list-btn" data-type="add-list"><span>${circlePlus}</span>New List</button>
  `;
  const markup = `
  <div class="content-title-bar">
    <h2 class="main-content-title">${textContent}</h2>
    ${/^List:/.test(textContent) ? listMenu : ''}
    ${textContent === 'Lists' ? addListBtn : addTaskBtn}
    ${textContent === 'Today' || textContent === 'Lists' ? '' : selectSort}
  </div>
  `;
  const contentTitleBar = new DOMParser()
    .parseFromString(markup, 'text/html')
    .querySelector('.content-title-bar');

  return contentTitleBar;
}

function getPrioritiesNumbers(tasks) {
  const priorities = {
    High: 0,
    Medium: 0,
    Low: 0,
    None: 0,
  };
  tasks.forEach((task) => {
    priorities[task.priority] += 1;
  });

  return priorities;
}

function createListCard(listName, tasks) {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const priorities = getPrioritiesNumbers(tasks);
  const markup = `
  <div class="list-card" data-content="${listName}">
    <div class="list-name">${listName}</div>
    <div class="list-tasks"><span>Tasks: ${tasks.length}</span><span>Completed: ${completedTasks}</span></div>
    <ul class="list-details">
      <li>High: ${priorities.High}</li>
      <li>Medium: ${priorities.Medium}</li>
      <li>Low: ${priorities.Low}</li>
      <li>None: ${priorities.None}</li>
    </ul>
    <menu class="edit-list-menu">
      <button class="edit-list-btn" data-type="edit-list" data-list=${listName}>${penToSquare}</button>
      <button class="delete-list-btn" data-type="delete-list" data-list="${listName}">${trashCan}</button>
    </menu>
  </div>
  `;

  const listCard = new DOMParser()
    .parseFromString(markup, 'text/html')
    .querySelector('.list-card');

  return listCard;
}

function createListsContent(lists) {
  const listsCards = [];
  const listsNames = Object.keys(lists);
  listsNames.forEach((listName) => {
    const listCard = createListCard(listName, lists[listName]);
    listsCards.push(listCard);
  });

  return listsCards;
}

function populateMainContent() {
  const contentToDisplay = localStorage.getItem('content');
  const todo = new Lists();

  let heading;
  let content;
  switch (contentToDisplay) {
    case 'Scheduled': {
      const tasks = todo.getAllTasks();
      content = createContent(tasks);
      heading = contentToDisplay;
      break;
    }
    case 'Today': {
      const tasks = todo.getTodaysTasks();
      content = createContent(tasks, 'priority');
      heading = contentToDisplay;
      break;
    }
    case 'This Week': {
      const tasks = todo.getThisWeeksTasks();
      content = createContent(tasks);
      heading = contentToDisplay;
      break;
    }
    case 'Completed': {
      const tasks = todo.getAllTasks().filter((task) => task.completed);
      content = createContent(tasks, undefined, true);
      heading = contentToDisplay;
      break;
    }
    case 'Lists': {
      const { lists } = todo;
      content = createListsContent(lists);
      heading = `${contentToDisplay}`;
      break;
    }
    default: {
      const list = todo.lists[contentToDisplay];
      content = createContent(list);
      heading = `List: ${contentToDisplay}`;
    }
  }

  const mainContent = document.createElement('div');

  mainContent.classList.add('main-content');
  mainContent.append(...content);
  const main = document.querySelector('.main');
  main.replaceChildren();
  const contentTitle = getContentTitleBar(heading);
  main.appendChild(contentTitle);
  main.appendChild(mainContent);

  const navBar = document.querySelector('.nav-bar');
  if (navBar.classList.contains('show')) {
    document.querySelector('.hamburger-btn').click();
  }
}

function updateUI() {
  populateListMenu();
  populateMainContent();
  colorNavSelection();
}

function createListOptions(lists) {
  const currentContent = localStorage.getItem('content');
  let markup = '';

  lists.forEach((list) => {
    markup += `<option value="${list}" ${
      currentContent === list ? 'selected' : ''
    }>${list}</option>`;
  });

  return markup;
}

function populateListOption(modal) {
  const todo = new Lists();
  const lists = Object.keys(todo.lists);
  const listOption = modal.querySelector('.list-option');
  listOption.replaceChildren();
  let markup;

  if (lists.length === 0) {
    markup = `
    <button class="add-list-btn" type="button" data-type="add-list">+ Add New List</button>
    `;
  } else {
    markup = `
    <select id="list">
      <option value="">--Please select an option--</option>
      ${createListOptions(lists)}
    </select>
    `;
  }
  const listOptionContent = new DOMParser().parseFromString(markup, 'text/html')
    .body.children;

  listOption.append(...listOptionContent);
}

function populateEditTaskForm(form) {
  const targetList = form.dataset.list;
  const targetId = Number(form.dataset.id);
  const todo = new Lists();
  const list = todo.lists[targetList];
  const task = list.find((element) => element.id === targetId);
  const inputFields = form.elements;

  inputFields.title.value = task.title;
  inputFields['due-date'].valueAsDate = task.dueDate;
  [...inputFields.priority.options].forEach((option) => {
    if (option.value === task.priority) {
      option.setAttribute('selected', '');
    } else {
      option.removeAttribute('selected');
    }
  });
  [...inputFields.list.options].forEach((option) => {
    if (option.value === task.list) {
      option.setAttribute('selected', '');
    } else {
      option.removeAttribute('selected');
    }
  });
  inputFields.notes.value = task.notes;
  inputFields.completed.value = task.completed;
}

function renderStateBtn(button) {
  const todo = new Lists();
  const list = todo.lists[button.dataset.list];
  const id = Number(button.dataset.id);
  const task = list.find((element) => element.id === id);

  const completedIcon = button.querySelector('.completed-icon');
  const completedText = button.querySelector('.completed-text');

  let stateIcon;
  completedIcon.replaceChildren();
  if (task.completed) {
    button.classList.add('task-completed');
    completedIcon.classList.add('.icon-on');
    stateIcon = toggleOn;
    completedText.classList.add('text-on');
    completedText.textContent = 'Completed';
  } else {
    button.classList.remove('task-completed');
    completedIcon.classList.remove('.icon-on');
    stateIcon = toggleOff;
    completedText.classList.remove('text-on');
    completedText.textContent = '';
  }
  const svgIcon = new DOMParser().parseFromString(
    stateIcon,
    'text/xml',
  ).documentElement;
  completedIcon.appendChild(svgIcon);
}

export {
  populateMainContent,
  populateListMenu,
  colorNavSelection,
  updateUI,
  populateListOption,
  populateEditTaskForm,
  renderStateBtn,
};
