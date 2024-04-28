import { DynamicModule, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppLoggerMiddleware } from './app.middleware';
import { ListsModule } from '../lists/lists.module';
import { PopularModule } from '../popular/popular.module';
import { SerieModule } from '../serieInfo/serie.module';
import { FilmModule } from '../films/film.module';

export class AppModule implements NestModule {
  static forRoot(): DynamicModule {
    return {
      module: this,
      imports: [ListsModule, PopularModule, SerieModule, FilmModule],
    };
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
