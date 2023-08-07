import { addDays } from 'date-fns';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 4,
    min: 1,
  },
  wordsPerSentence: {
    max: 8,
    min: 4,
  },
});

class RandomPriority {
  static LEVELS = ['None', 'Low', 'Medium', 'High'];

  #index;

  constructor() {
    this.#index = Math.floor(Math.random() * RandomPriority.LEVELS.length);
    this.level = RandomPriority.LEVELS.at(this.#index);
    this.levelAsNumber = this.#index;
  }
}

function getTodaysDate() {
  const today = new Date();
  today.setHours(0, 0, 0);

  return today;
}

function createRandomTask(list) {
  const randomNumberOfDays = Math.floor(Math.random() * 14);
  const dueDate = addDays(getTodaysDate(), randomNumberOfDays);
  const id = Math.floor(Math.random() * Date.now());
  const title = lorem.generateSentences(1);
  const notes = lorem.generateParagraphs(1);
  const randomPriority = new RandomPriority();
  const priority = randomPriority.level;
  const priorityAsNumber = randomPriority.levelAsNumber;

  return {
    list,
    title,
    notes,
    dueDate,
    id,
    priority,
    priorityAsNumber,
  };
}

function createRandomArrayOfTasks(list) {
  const arrayOfTasks = [];
  const randomNumberOfTasks = Math.floor(Math.random() * 8) + 3;

  for (let i = 0; i < randomNumberOfTasks; i += 1) {
    arrayOfTasks.push(createRandomTask(list));
  }

  return arrayOfTasks;
}

function createRandomLists() {
  const lists = {};
  const randomNumberOfLists = Math.floor(Math.random() * 3) + 3;

  for (let i = 0; i < randomNumberOfLists; i += 1) {
    const randomList = lorem.generateWords(1);
    const listName = randomList.at(0).toLocaleUpperCase() + randomList.slice(1);
    lists[listName] = createRandomArrayOfTasks(listName);
  }

  return lists;
}

export { createRandomLists, createRandomArrayOfTasks, createRandomTask };
