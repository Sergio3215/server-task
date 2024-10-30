import { Injectable } from '@nestjs/common';
import { TaskSchema } from '../Interface/task';
import { TaskQuery } from '../db/query'

const taskQuery = new TaskQuery();

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class TaskService {
  createTask(task: TaskSchema): Object {
    // Lógica para crear una nueva tarea
    const { name, description } = task;
    taskQuery.CreateTask(name, description);
    return {
      success:true
    }
  }

  getTasks(): any {
    // Lógica para obtener todas las tareas
    return taskQuery.GetTask();
  }
}
