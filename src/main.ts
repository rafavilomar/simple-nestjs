import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const APP = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });

  const SWAGGER_CONFIG = new DocumentBuilder()
    .setTitle('Simple NestJS')
    .setDescription('A simple NestJS API using Docker, PostgreSQL and Swagger')
    .setVersion('1.0')
    .build();
  const DOCUMENT_SWAGGER = SwaggerModule.createDocument(APP, SWAGGER_CONFIG);
  SwaggerModule.setup('api', APP, DOCUMENT_SWAGGER);

  await APP.listen(Number(process.env.PORT));
}
bootstrap();
