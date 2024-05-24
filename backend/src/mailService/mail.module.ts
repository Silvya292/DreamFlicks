import { Module } from '@nestjs/common';
import { MailService } from './infrastructure/mail.service';
import { ListCreationMail } from './application/listCreation';
import { MailRepository } from './domain/repository/mailRepository';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        transport: {
          host: 'smtp.gmail.com',
          secure: true,
          port: 465,
          auth: {
            user: 'dreamflicks.app@gmail.com',
            pass: '',
          },
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [
    MailService,
    ListCreationMail,
    { provide: MailRepository, useClass: MailService },
  ],
})
export class MailModule {}
