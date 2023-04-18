function taskManager() {
  // Tu código aquí 👈

  const tasks = new Map();

  function addTask(task, tags) {
    task = task.toLowerCase();

    // Check for existing tasks in map
    if (tasks.has(task)) {
      tags.forEach((item) => tasks.get(task).add(item));
      return;
    }

    // If it does not exists we create a new task
    tasks.set(task, new Set([...tags]));
  }

  function printTask() {
    return tasks;
  }

  return {
    addTask,
    printTask,
  };
}

const myTaskManager = taskManager();
myTaskManager.addTask("Comprar leche", ["compras", "urgente"]);
myTaskManager.addTask("Sacar al perro", ["mascotas"]);
myTaskManager.addTask("Hacer ejercicio", ["salud"]);
myTaskManager.addTask("Comprar leche", ["lácteos"]);

console.log(myTaskManager.printTask());
