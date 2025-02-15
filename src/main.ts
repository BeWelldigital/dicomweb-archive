import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('bootstrap');
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  const port = 5000;
  await app.listen(port);
  logger.verbose(`Http server listening on port: ${port}`)
}
bootstrap();
