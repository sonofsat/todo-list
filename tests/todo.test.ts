
//ejemplo de test: test('el mejor sabor es de melocotón', () => { expect(mejorSabor()).toBe('melocotón');});

import { TodoList } from '../src/todo'; // import type {Config} from 'jest';

//describe('test 1', (t) => {
  //it('some test');
//}); https://nodejs.org/docs/latest/api/test.html#todo-tests

describe('TodoList', () => {
  let todoList: TodoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  it('should add a task to the list', () => {  
    todoList.addTask('Ir al mercadona');
    expect(todoList.getTasks()).toHaveLength(1); 
  });

  it('should mark a task as completed', () => {
    todoList.addTask('Ir al mercadona');
    const tasks = todoList.getTasks();
    const taskId = tasks[0].id;
    todoList.markTaskAsCompleted(taskId);
    expect(todoList.getTasks()[0].completed).toBe(true);
  });

  it('should delete a task from the list', () => {
    todoList.addTask('Ir al mercadona');
    const tasks = todoList.getTasks();
    const taskId = tasks[0].id;
    todoList.deleteTask(taskId);
    expect(todoList.getTasks()).toHaveLength(0);
  });
});
