import { Module } from '@nestjs/common';
import { MailService } from './infrastructure/mail.service';
import { ListCreationMail } from './application/listCreation';
import { MailRepository } from './domain/repository/mailRepository';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  providers: [
    MailService,
    ListCreationMail,
    { provide: MailRepository, useClass: MailService },
  ],
})
export class MailModule {}
