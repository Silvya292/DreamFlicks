import { DynamicModule, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppLoggerMiddleware } from './app.middleware';
import { ListsModule } from '../lists/lists.module';

export class AppModule implements NestModule {
  static forRoot(): DynamicModule {
    return {
      module: this,
      imports: [ListsModule],
    };
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
