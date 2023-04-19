export class Authorization {
  checkAuthorization(user, task) {
    // Tu código aquí 👈
    const isAuthenticated =
      task.users.findIndex((taskUser) => taskUser.name === user.name) !== -1;

    if (!isAuthenticated) throw Error("Not authorized");

    console.log(`User: ${user.name} is authorized`);
    task.completeTask();
  }
}
