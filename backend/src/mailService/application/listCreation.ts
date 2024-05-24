import { Injectable } from '@nestjs/common';
import { MailRepository } from '../domain/repository/mailRepository';

@Injectable()
export class ListCreationMail {
  constructor(private repository: MailRepository) {}

  async run(
    userMail: string,
    userName: string,
    listTitle: string
  ): Promise<void> {
    await this.repository.sendMailCreateList(userMail, userName, listTitle);
  }
}
