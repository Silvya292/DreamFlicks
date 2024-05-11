import { DynamicModule, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppLoggerMiddleware } from './app.middleware';
import { FilmModule } from '../films/film.module';
import { TvSerieModule } from '../tvSeries/tvSerie.module';
import { ListModule } from '../lists/list.module';
import { MongooseModule } from '@nestjs/mongoose';

export class AppModule implements NestModule {
  static forRoot(): DynamicModule {
    return {
      module: this,
      imports: [
        FilmModule,
        TvSerieModule,
        ListModule,
        MongooseModule.forRootAsync({
          useFactory: () => ({
            uri: 'mongodb://localhost:27017/dreamflicks-lists',
          }),
        }),
      ],
    };
  }

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AppLoggerMiddleware).forRoutes('*');
  }
}
