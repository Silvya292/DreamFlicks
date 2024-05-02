import { DynamicModule, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppLoggerMiddleware } from './app.middleware';
import { ListsModule } from '../lists/lists.module';
import { FilmModule } from '../films/film.module';
import { TvSerieModule } from '../tvSeries/tvSerie.module';

export class AppModule implements NestModule {
  static forRoot(): DynamicModule {
    return {
      module: this,
      imports: [ListsModule, FilmModule, TvSerieModule],
    };
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
