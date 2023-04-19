import { Authorization } from "./Authorization.mjs";
import { User } from "./User.mjs";
import { TaskBuilder } from "./TaskBuilder.mjs";
import { TaskManager } from "./TaskManager.mjs";
import { TaskDecorator } from "./TaskDecorator.mjs";
import { Task } from "./excercise.mjs";

// TESTS

// const taskManager1 = TaskManager.getInstance();
// const taskManager2 = TaskManager.getInstance();

// console.log(taskManager1 === taskManager2);

// TEST 2
// const taskManager = TaskManager.getInstance();
// const mockTask = new Task(1, "Mock task");

// taskManager.addTask(mockTask);
// taskManager.getTasks();

// TEST 3

// const authorization = new Authorization();
// const user1 = new User("Juan");
// const user2 = new User("Maria");
// const task = new Task("4", "Comprar pan");
// task.assignUser(user1);

// authorization.checkAuthorization(user1, task);
// authorization.checkAuthorization(user2, task);

// TEST 4
const task = new Task("5", "Pasear al perro");
const taskDecorator = new TaskDecorator(task, {
  deadline: "2023-03-31",
  priority: "high",
});

taskDecorator.completeTask();

taskDecorator.assignUser(new User("Jaime"));
taskDecorator.completeTask();

console.log(taskDecorator);
