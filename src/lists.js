import { isThisWeek, isToday } from 'date-fns';

class Lists {
  constructor() {
    if (localStorage.getItem('lists')) {
      this.lists = Lists.getListsFromStorage();
    } else {
      this.lists = {};
    }
  }

  getListsNames() {
    return Object.keys(this.lists);
  }

  getAllTasks() {
    const allTasks = [];
    const lists = this.getListsNames();

    lists.forEach((list) => {
      allTasks.push(this.lists[list]);
    });
    return allTasks.flat();
  }

  getTodaysTasks() {
    const todaysTasks = [];
    const allTasks = this.getAllTasks();

    allTasks.forEach((task) => {
      if (isToday(task.dueDate)) {
        todaysTasks.push(task);
      }
    });

    return todaysTasks;
  }

  getThisWeeksTasks() {
    const thisWeeksTasks = [];
    const allTasks = this.getAllTasks();

    allTasks.forEach((task) => {
      if (isThisWeek(task.dueDate)) {
        thisWeeksTasks.push(task);
      }
    });

    return thisWeeksTasks;
  }

  static sortByDate(list) {
    list.sort((a, b) => b.priorityAsNumber - a.priorityAsNumber);
    list.sort((a, b) => a.dueDate - b.dueDate);

    return list;
  }

  static sortByPriority(list) {
    list.sort((a, b) => a.dueDate - b.dueDate);
    list.sort((a, b) => b.priorityAsNumber - a.priorityAsNumber);

    return list;
  }

  static groupByPriority(tasks) {
    const listsByPriority = {};
    Lists.sortByPriority(tasks);

    tasks.forEach((task) => {
      if (
        Object.prototype.hasOwnProperty.call(listsByPriority, task.priority)
      ) {
        listsByPriority[task.priority].push(task);
      } else {
        listsByPriority[task.priority] = [];
        listsByPriority[task.priority].push(task);
      }
    });

    return listsByPriority;
  }

  static groupByDate(tasks) {
    const listsByDate = {};
    Lists.sortByDate(tasks);

    tasks.forEach((task) => {
      if (Object.prototype.hasOwnProperty.call(listsByDate, task.dueDate)) {
        listsByDate[task.dueDate].push(task);
      } else {
        listsByDate[task.dueDate] = [];
        listsByDate[task.dueDate].push(task);
      }
    });

    return listsByDate;
  }

  static getListsFromStorage() {
    const storedLists = localStorage.getItem('lists');
    const parsed = JSON.parse(storedLists, (key, value) =>
      key === 'dueDate' ? new Date(value) : value,
    );

    return parsed;
  }
}

export default Lists;
