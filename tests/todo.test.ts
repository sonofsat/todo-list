
import { TodoList } from '../src/todo';

describe('TodoList', () => {
  let todoList: TodoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  it('should add a task to the list', () => {
    todoList.addTask('Do laundry');
    expect(todoList.getTasks()).toHaveLength(1);
  });

  it('should mark a task as completed', () => {
    todoList.addTask('Do laundry');
    const tasks = todoList.getTasks();
    const taskId = tasks[0].id;
    todoList.markTaskAsCompleted(taskId);
    expect(todoList.getTasks()[0].completed).toBe(true);
  });

  it('should delete a task from the list', () => {
    todoList.addTask('Do laundry');
    const tasks = todoList.getTasks();
    const taskId = tasks[0].id;
    todoList.deleteTask(taskId);
    expect(todoList.getTasks()).toHaveLength(0);
  });
});
