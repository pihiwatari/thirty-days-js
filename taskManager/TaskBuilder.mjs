import { Task } from "./excercise.mjs";

export class TaskBuilder {
  constructor() {
    // Tu código aquí 👈
    this.id = 0;
    this.description = "";
    this.completed = false;
    this.users = [];
    this.deadline = null;
    this.priority = null;
  }

  setId(id) {
    // Tu código aquí 👈
    this.id = id;
    return this;
  }

  setDescription(description) {
    // Tu código aquí 👈
    this.description = description;
    return this;
  }

  setCompleted(completed) {
    // Tu código aquí 👈
    this.completed = completed;
    return this;
  }

  setUsers(users) {
    // Tu código aquí 👈
    this.users = users;
    return this;
  }

  setDeadline(deadline) {
    // Tu código aquí 👈
    this.deadline = deadline;
    return this;
  }

  setPriority(priority) {
    // Tu código aquí 👈
    this.priority = priority;
    return this;
  }

  build() {
    // Tu código aquí 👈
    const task = new Task(this.id, this.description);
    this.users.forEach((user) => task.assignUser(user));
    task.priority = this.priority;
    task.deadline = this.deadline;
    return task;
  }
}
