// Build a basic TODO list (without UI)
// Each item must be an object like
// {
//   task: "Buy groceries",
//   isCompleted: false
// }

// Features to Implement:
//     addTask(task): Adds a new task.
//     removeTask(task): Removes a task.
//     markComplete(task): Marks a task as completed.
//     listTasks(): Lists all tasks, showing completed ones differently.

function createToDoList() {
  let tasks = [];

  function addTask(work) {
    // TODO
  }

  function removeTask(work) {
    // TODO
  }

  function markCompleted(work) {
    // TODO
  }

  function listTasks() {
    // TODO
  }

  return { addTask, removeTask, markCompleted, listTasks };
}

const todo = createTodoList();
todo.addTask("Buy Groceries");
todo.addTask("Do Laundry");
todo.addTask("Clean room");
todo.listTasks();
console.log("--------");
todo.markCompleted("Do Laundry");
todo.listTasks();
console.log("---------");
todo.removeTask("Do Laundry");
todo.listTask();
