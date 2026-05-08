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
    return tasks.push({ task: work, isCompleted: false });
  }

  function removeTask(work) {
    let count = 0;
    for (job of work) {
      count++;
      if (job.task == work) {
        task.splice(count, 1);
      }
    }

    return task;
  }

  function markCompleted(work) {
    let index = tasks.findIndex((t) => t.task == work);
    task[index].isCompleted = true;
    return task[index];
  }

  function listTasks() {
    console.log(tasks);
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
