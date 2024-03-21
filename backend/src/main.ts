/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

const GLOBAL_PREFIX = 'api';

async function bootstrap() {
  const app = await NestFactory.create(AppModule.forRoot(), {
    logger:
      process.env.NODE_ENV == 'development'
        ? ['debug', 'error', 'log', 'verbose', 'warn']
        : ['error', 'warn'],
  });
  app.setGlobalPrefix(GLOBAL_PREFIX);
  app.enableCors();

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `Listening at http://localhost:${port}/${GLOBAL_PREFIX} in ${process.env.NODE_ENV} mode`
  );
}

bootstrap();
