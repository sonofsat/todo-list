
import { TodoList } from '../src/todo';

describe('TodoList', () => {
  let todoList: TodoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  test('should add a task to the list', () => {
    todoList.addTask('Ir al mercadona');
    expect(todoList.getTasks()).toHaveLength(1);
  });

  test('should mark a task as completed', () => {
    todoList.addTask('Ir al mercadona');
    const tasks = todoList.getTasks();
    const taskId = tasks[0].id;
    todoList.markTaskAsCompleted(taskId);
    expect(todoList.getTasks()[0].completed).toBe(true);
  });

  test('should delete a task from the list', () => {
    todoList.addTask('Ir al mercadona');
    const tasks = todoList.getTasks();
    const taskId = tasks[0].id;
    todoList.deleteTask(taskId);
    expect(todoList.getTasks()).toHaveLength(0);
  });
});
