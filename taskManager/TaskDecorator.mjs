export class TaskDecorator {
  constructor(task, options) {
    // Tu código aquí 👈
    this.task = task;
    this.deadline = options.deadline;
    this.priority = options.priority;
  }

  assignUser(user) {
    // Tu código aquí 👈
    this.task.assignUser(user);
  }

  completeTask() {
    // Tu código aquí 👈
    this.task.completeTask();
  }

  notifyUsers() {
    // Tu código aquí 👈
    this.task.notifyUsers();
  }
}
