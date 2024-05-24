import { DynamicModule, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { AppLoggerMiddleware } from './app.middleware';
import { FilmModule } from '../films/film.module';
import { TvSerieModule } from '../tvSeries/tvSerie.module';
import { ListModule } from '../lists/list.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MailModule } from '../mailService/mail.module';
import { MailService } from '../mailService/infrastructure/mail.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

export class AppModule implements NestModule {
  static forRoot(): DynamicModule {
    return {
      module: this,
      providers: [MailService, ConfigService],
      imports: [
        FilmModule,
        TvSerieModule,
        ListModule,
        MailModule,
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
