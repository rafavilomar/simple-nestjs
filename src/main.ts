import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const APP = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });
  await APP.listen(Number(process.env.PORT));
}
bootstrap();
