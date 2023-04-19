import { Task } from "./excercise.mjs";

export class TaskManager {
  static instance = null;

  constructor() {
    // Tu código aquí 👈
    this.tasks = [];
  }

  static getInstance() {
    // Tu código aquí 👈
    if (TaskManager.instance === null) {
      TaskManager.instance = new TaskManager();
    }
    return TaskManager.instance;
  }

  addTask(task) {
    // Tu código aquí 👈
    if (!(task instanceof Task)) return;

    if (
      this.tasks.findIndex((managerTask) => managerTask.id === task.id) !== -1
    ) {
      throw Error("This task already exists in the Task manager");
    }

    this.tasks.push(task);
    console.log(`Task added: ${task.description}`);
  }

  getTasks() {
    // Tu código aquí
    if (this.tasks.length === 0) {
      console.log("The tasks list is empty");
      return;
    }

    console.log(this.tasks);
    return this.tasks;
  }

  getTaskById(id) {
    // Tu código aquí 👈
    const task = this.tasks.find((task) => task.id === id);
    console.log(task);
    return task ? task : null;
  }
}
