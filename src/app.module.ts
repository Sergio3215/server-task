import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, TaskService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, TaskService],
})
export class AppModule {}
