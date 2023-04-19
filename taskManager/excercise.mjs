import { User } from "./User.mjs";

export class Task {
  constructor(id, description) {
    // Tu código aquí 👈
    this.id = id;
    this.description = description;
    this.completed = false;
    this.users = [];
  }

  assignUser(user) {
    // Tu código aquí
    if (user instanceof User) {
      this.users.push(user);
      return this.users;
    }
  }

  completeTask() {
    // Tu código aquí 👈
    if (this.users.length === 0) {
      console.log("Cannot complete task, no user assigned to this task");
      return;
    }
    this.completed = true;
    this.notifyUsers();
  }

  notifyUsers() {
    // Tu código aquí 👈
    this.users.forEach((user) => user.notify(this));
  }
}
