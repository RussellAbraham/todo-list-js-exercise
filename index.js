class Task {
  constructor ({title, description}) {
    this.title = title;
    this.description = description;
    this.complete = false;
  }
  logState () {
    return `${this.title} has${this.complete ? ' ' : ' not '}been completed`;
  }
  markCompleted () {
    this.complete = true;
  }
}

class TaskList {
  constructor () {
    this.tasks = [];
  }
  addTask (task) {
    this.tasks.push(new Task(task));
  }
  logTasks (callback) {
    this.tasks.forEach(task => callback(task.logState()));
  }
}


const tasklist = new TaskList();

tasklist.addTask({
  title : 'Clean Cat Litter',
  description : 'Take all the 💩 out of the litter box'
});

tasklist.addTask({
  title: 'Do Laundry',
  description: '😨'
});

tasklist.logTasks(console.log);
