import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita CORS para permitir el acceso desde otro origen
  app.enableCors({
    origin: ['http://localhost:3000', 'task-with-nest-production.up.railway.app'], // Permitir solicitudes desde el puerto 3000
    credentials: true,                // Permitir cookies si es necesario
  });
  
  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
