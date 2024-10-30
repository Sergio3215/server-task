import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService, TaskService } from './app.service';
import { TaskSchema } from '../Interface/task';

@Controller()
export class AppController {
  constructor(private readonly taskService: TaskService) { }

  @Post()
  createPost(@Body() task: TaskSchema): Object {
    return this.taskService.createTask(task);
  }

  @Get()
  getTasks(): any[] {
    return this.taskService.getTasks();
  }
}
