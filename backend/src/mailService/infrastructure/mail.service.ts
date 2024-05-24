// src/mail/mail.service.ts
import { Injectable } from '@nestjs/common';
import { MailRepository } from '../domain/repository/mailRepository';

@Injectable()
export class MailService implements MailRepository {
  async sendMailCreateList(userMail: string): Promise<void> {
    console.log('Sending email to: ', userMail);
  }
}
