import { Get, ValidationPipe, Post, Delete } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  app.enableCors({
    allowedHeaders: 'Content-Type, Accept, Authorization',
    origin: 'http://127.0.0.1:3000',
    credentials: true,
    methods: 'POST,GET,DELETE,PATCH,OPTIONS,PUT',
  });
  await app.listen(3300);
}
bootstrap();
