export class User {
  constructor(name) {
    // Tu código aquí 👈
    this.name = name;
  }

  notify(task) {
    // Tu código aquí 👈
    console.log(`The task: ${task?.description} is completed.`);
  }
}
