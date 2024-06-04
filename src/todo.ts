
export interface Task {
    id: number;
    description: string;
    completed: boolean;
  }


export class TodoList {
    private tasks: Task[] = [];
  
    addTask(description: string): void {
      const task: Task = {
        id: this.tasks.length + 1,
        description,
        completed: false,
      };
      this.tasks.push(task);
    }
  
    markTaskAsCompleted(id: number): void {
      const task = this.tasks.find(task => task.id === id);
      if (task) {
        task.completed = true;
      }
    }
  
    deleteTask(id: number): void {
      this.tasks = this.tasks.filter(task => task.id !== id);
    }
  
    getTasks(): Task[] {
      return this.tasks;
    }
  }
  